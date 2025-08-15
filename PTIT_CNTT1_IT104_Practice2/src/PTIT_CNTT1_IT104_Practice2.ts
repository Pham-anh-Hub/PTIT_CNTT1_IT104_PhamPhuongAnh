class Passenger {
    passengerId: number
    name: string
    passportNumber: string;
    constructor(passengerId: number, name: string, passportNumber: string) {
        this.name = name;
        this.passengerId = passengerId;
        this.passportNumber = passportNumber;
    }
    getDetails(): string {
        return `Hành khách: ${this.name} - ${this.passengerId} - Mã hộ chiếu: ${this.passportNumber}`;
    }
}

abstract class Flight {
    flightNumber: string; //Số hiệu chuyến bay (chuỗi, duy nhất).
    origin: string // Nơi đi (chuỗi).
    destination: string // Nơi đến (chuỗi).
    departureTime: Date; // Thời gian khởi hành (đối tượng Date).
    capacity: number; // Sức chứa (số).
    bookedSeats: number // Số ghế đã đặt (số).
    constructor(flightNumber: string, origin: string, destination: string, departureTime: Date, capacity: number, bookedSeats: number) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
        this.bookedSeats = bookedSeats;
    }
    // Đặt một ghế (tăng bookedSeats lên 1).
    bookSeat(): void {
        this.bookedSeats += 1;
    }




    //  Kiểm tra chuyến bay đã đầy hay chưa.
    isFull(): boolean {
        if (this.bookedSeats === this.capacity) {
            return true;
        }
        return false;
    }

    // : Tính phí hành lý dựa trên cân nặng (Phương thức trừu tượng).
    abstract calculateBaggageFee(weight: number): number;
}

class DomesticFlight extends Flight {
    constructor(flightNumber: string, origin: string, destination: string, departureTime: Date, capacity: number, bookedSeats: number) {
        super(flightNumber, origin, destination, departureTime, capacity, bookedSeats);
    }
    calculateBaggageFee(weight: number): number {
        return 50000 * weight;
    }
}

class InternationalFlight extends Flight {
    constructor(flightNumber: string, origin: string, destination: string, departureTime: Date, capacity: number, bookedSeats: number) {
        super(flightNumber, origin, destination, departureTime, capacity, bookedSeats);
    }

    calculateBaggageFee(weight: number): number {
        return weight * (10 * 26290);
    }
}


class Booking {
    bookingId: number // Mã đặt vé (số, tự tăng).
    passenger: Passenger // Hành khách đặt vé (Passenger).
    flight: Flight // Chuyến bay được đặt (Flight).
    numberOfTickets: number //  Số lượng vé (số).
    totalCost: number // Tổng chi phí: Tiền vé + phí hành lý (số).
    constructor(bookingId: number, passenger: Passenger, flight: Flight, numberOfTickets: number, totalCost: number) {
        this.bookingId = bookingId;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = totalCost;
    }
    // : Trả về thông tin chi tiết của giao dịch đặt vé.
    getBookingDetails(): string {
        return `Mã giao dịch: ${this.bookingId}
        Hành khách: ${this.passenger}
        Chuyến bay: ${this.flight}
        Số lượng vé: ${this.numberOfTickets}
            Tổng chi phí: ${this.totalCost}`
    }
}

class GenericRepository<T> {
    private items: T[];
    constructor(items: T[]) {
        this.items = items;
    }
    // Thêm một đối tượng vào danh sách.
    add(item: T): void {
        this.items.push(item);
    }


    // : Lấy ra toàn bộ danh sách các đối tượng.
    getAll(): T[] {
        return this.items;
    }


    // : Tìm một đối tượng dựa trên một điều kiện.
    find(predicate: (item: T) => boolean): T | undefined {
        for (const item of this.items) {
            if (predicate(item)) {
                return item;
            }
        }
        // return undefined;
    }

    // : Tìm chỉ mục của một đối tượng dựa trên một điều kiện.
    findIndex(predicate: (item: T) => boolean): number {
        for (let i = 0; i < this.items.length; i++) {
            if (predicate(this.items[i])) {
                return i;
            }
        }
        return -1;
    }


    // : Xóa các đối tượng khỏi danh sách dựa trên điều kiện.
    remove(predicate: (item: T) => boolean): void {
        for (let i = 0; i < this.items.length; i++) {
            if (predicate(this.items[i])) {
                this.items.splice(i, 1);
            }
        }
    }
}

class AirlineManager {
    // : Kho chứa các chuyến bay.
    private flightRepo: GenericRepository<Flight>;
    // : Kho chứa các hành khách.   
    private passengerRepo: GenericRepository<Passenger>;
    //  Kho chứa các giao dịch đặt vé
    private bookingRepo: GenericRepository<Booking>;

    constructor(flightRepo: GenericRepository<Flight>, passengerRepo: GenericRepository<Passenger>, bookingRepo: GenericRepository<Booking>) {
        this.flightRepo = flightRepo;
        this.passengerRepo = passengerRepo;
        this.bookingRepo = bookingRepo;
    }

    // Thêm chuyến bay mới vào flightRepo.
    addFlight(flight: Flight): void {
        this.flightRepo.add(flight);
    }

    // : Thêm hành khách mới vào passengerRepo.
    addPassenger(name: string, passportNumber: string): void {
        let quantityPassenger = this.passengerRepo.getAll.length;
        const newPassenger = new Passenger(quantityPassenger += 1, name, passportNumber);
        this.passengerRepo.add(newPassenger)
    }


    // : Tạo một giao dịch đặt vé mới và thêm vào bookingRepo.
    createBooking(passengerId: number, flightNumber: string, numberOfTickets: number): void {
        let quantityBooking = this.bookingRepo.getAll().length;
        const bookingPassenger = this.passengerRepo.find((passener: Passenger) => passener.passengerId === passengerId)
        if (bookingPassenger) {
            const targetFlight = this.flightRepo.find((flight: Flight) => flight.flightNumber === flightNumber);
            if (targetFlight) {
                if (!targetFlight.isFull()) {
                    targetFlight.bookSeat();
                    const newBooking = new Booking(quantityBooking += 1, bookingPassenger, targetFlight, numberOfTickets, numberOfTickets * 1200000);
                    this.bookingRepo.add(newBooking);
                    // this.flightRepo.remove((flight : Flight) => flight.flightNumber === targetFlight.flightNumber);
                } else {
                    alert("Chuyến bay đã đầy !!");
                }
            }
        }
    }


    cancelBooking(bookingId: number): void {
        const targetBooking = this.bookingRepo.find((booking: Booking) => booking.bookingId === bookingId);
        if (targetBooking) {
            if (targetBooking.numberOfTickets <= targetBooking.flight.bookedSeats) {
                targetBooking.flight.bookedSeats -= targetBooking.numberOfTickets;
            }
        }
        this.bookingRepo.remove((booking: Booking) => booking.bookingId === bookingId);
    }



    //  Hiển thị danh sách các chuyến bay còn chỗ(lấy dữ liệu từ flightRepo và dùng filter).
    listAvailableFlights(origin: string, destination: string): void {
        const availableFlight = this.flightRepo.getAll().filter((flight: Flight) => (flight.destination == destination && flight.origin == origin) && flight.bookedSeats > 0);
        if (availableFlight.length > 0) {
            console.log("Các chuyến bay còn sẵn: ", availableFlight);
        } else {
            alert("Hiện không có chuyến bay có sẵn ");
        }

    }

    // : Hiển thị danh sách các vé đã đặt của một hành khách(dùng filter).
    listBookingsByPassenger(passengerId: number): void {
        const passengerFlights = this.bookingRepo.getAll().filter((booking: Booking) => booking.passenger.passengerId === passengerId);
        if (passengerFlights.length > 0) {
            console.log("Các chuyến bay hành khách đã đặt: ", passengerFlights);
        } else {
            alert("Chưa có chuyến bay nào được đặt bởi hành khách này.")
        }

    }




}


let choice;
const flightRepo = new GenericRepository<Flight>([]);     // ban đầu chưa có chuyến bay
const passengerRepo = new GenericRepository<Passenger>([]); // ban đầu chưa có hành khách
const bookingRepo = new GenericRepository<Booking>([]);     // ban đầu chưa có booking

let newAirlineManager = new AirlineManager(flightRepo, passengerRepo, bookingRepo);
do {
    choice = Number(prompt)
} while (choice);