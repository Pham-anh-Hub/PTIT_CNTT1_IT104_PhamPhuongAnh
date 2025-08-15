"use strict";
class Passenger {
    constructor(passengerId, name, passportNumber) {
        this.name = name;
        this.passengerId = passengerId;
        this.passportNumber = passportNumber;
    }
    getDetails() {
        return `Hành khách: ${this.name} - ${this.passengerId} - Mã hộ chiếu: ${this.passportNumber}`;
    }
}
class Flight {
    constructor(flightNumber, origin, destination, departureTime, capacity, bookedSeats) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
        this.bookedSeats = bookedSeats;
    }
    // Đặt một ghế (tăng bookedSeats lên 1).
    bookSeat() {
        this.bookedSeats += 1;
    }
    //  Kiểm tra chuyến bay đã đầy hay chưa.
    isFull() {
        if (this.bookedSeats === this.capacity) {
            return true;
        }
        return false;
    }
}
class DomesticFlight extends Flight {
    constructor(flightNumber, origin, destination, departureTime, capacity, bookedSeats) {
        super(flightNumber, origin, destination, departureTime, capacity, bookedSeats);
    }
    calculateBaggageFee(weight) {
        return 50000 * weight;
    }
}
class InternationalFlight extends Flight {
    constructor(flightNumber, origin, destination, departureTime, capacity, bookedSeats) {
        super(flightNumber, origin, destination, departureTime, capacity, bookedSeats);
    }
    calculateBaggageFee(weight) {
        return weight * (10 * 26290);
    }
}
class Booking {
    constructor(bookingId, passenger, flight, numberOfTickets, totalCost) {
        this.bookingId = bookingId;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = totalCost;
    }
    // : Trả về thông tin chi tiết của giao dịch đặt vé.
    getBookingDetails() {
        return `Mã giao dịch: ${this.bookingId}
        Hành khách: ${this.passenger}
        Chuyến bay: ${this.flight}
        Số lượng vé: ${this.numberOfTickets}
            Tổng chi phí: ${this.totalCost}`;
    }
}
class GenericRepository {
    constructor(items) {
        this.items = items;
    }
    // Thêm một đối tượng vào danh sách.
    add(item) {
        this.items.push(item);
    }
    // : Lấy ra toàn bộ danh sách các đối tượng.
    getAll() {
        return this.items;
    }
    // : Tìm một đối tượng dựa trên một điều kiện.
    find(predicate) {
        for (const item of this.items) {
            if (predicate(item)) {
                return item;
            }
        }
        // return undefined;
    }
    // : Tìm chỉ mục của một đối tượng dựa trên một điều kiện.
    findIndex(predicate) {
        for (let i = 0; i < this.items.length; i++) {
            if (predicate(this.items[i])) {
                return i;
            }
        }
        return -1;
    }
    // : Xóa các đối tượng khỏi danh sách dựa trên điều kiện.
    remove(predicate) {
        for (let i = 0; i < this.items.length; i++) {
            if (predicate(this.items[i])) {
                this.items.splice(i, 1);
            }
        }
    }
}
class AirlineManager {
    constructor(flightRepo, passengerRepo, bookingRepo) {
        this.flightRepo = flightRepo;
        this.passengerRepo = passengerRepo;
        this.bookingRepo = bookingRepo;
    }
    // Thêm chuyến bay mới vào flightRepo.
    addFlight(flight) {
        this.flightRepo.add(flight);
    }
    // : Thêm hành khách mới vào passengerRepo.
    addPassenger(name, passportNumber) {
        let quantityPassenger = this.passengerRepo.getAll.length;
        const newPassenger = new Passenger(quantityPassenger += 1, name, passportNumber);
        this.passengerRepo.add(newPassenger);
    }
    // : Tạo một giao dịch đặt vé mới và thêm vào bookingRepo.
    createBooking(passengerId, flightNumber, numberOfTickets) {
        let quantityBooking = this.bookingRepo.getAll().length;
        const bookingPassenger = this.passengerRepo.find((passener) => passener.passengerId === passengerId);
        if (bookingPassenger) {
            const targetFlight = this.flightRepo.find((flight) => flight.flightNumber === flightNumber);
            if (targetFlight) {
                if (!targetFlight.isFull()) {
                    targetFlight.bookSeat();
                    const newBooking = new Booking(quantityBooking += 1, bookingPassenger, targetFlight, numberOfTickets, numberOfTickets * 1200000);
                    this.bookingRepo.add(newBooking);
                    // this.flightRepo.remove((flight : Flight) => flight.flightNumber === targetFlight.flightNumber);
                }
                else {
                    alert("Chuyến bay đã đầy !!");
                }
            }
        }
    }
    cancelBooking(bookingId) {
        const targetBooking = this.bookingRepo.find((booking) => booking.bookingId === bookingId);
        if (targetBooking) {
            if (targetBooking.numberOfTickets <= targetBooking.flight.bookedSeats) {
                targetBooking.flight.bookedSeats -= targetBooking.numberOfTickets;
            }
        }
        this.bookingRepo.remove((booking) => booking.bookingId === bookingId);
    }
    //  Hiển thị danh sách các chuyến bay còn chỗ(lấy dữ liệu từ flightRepo và dùng filter).
    listAvailableFlights(origin, destination) {
        const availableFlight = this.flightRepo.getAll().filter((flight) => (flight.destination == destination && flight.origin == origin) && flight.bookedSeats > 0);
        if (availableFlight.length > 0) {
            console.log("Các chuyến bay còn sẵn: ", availableFlight);
        }
        else {
            alert("Hiện không có chuyến bay có sẵn ");
        }
    }
    // : Hiển thị danh sách các vé đã đặt của một hành khách(dùng filter).
    listBookingsByPassenger(passengerId) {
        const passengerFlights = this.bookingRepo.getAll().filter((booking) => booking.passenger.passengerId === passengerId);
        if (passengerFlights.length > 0) {
            console.log("Các chuyến bay hành khách đã đặt: ", passengerFlights);
        }
        else {
            alert("Chưa có chuyến bay nào được đặt bởi hành khách này.");
        }
    }
}
let choice;
const flightRepo = new GenericRepository([]); // ban đầu chưa có chuyến bay
const passengerRepo = new GenericRepository([]); // ban đầu chưa có hành khách
const bookingRepo = new GenericRepository([]); // ban đầu chưa có booking
let newAirlineManager = new AirlineManager(flightRepo, passengerRepo, bookingRepo);
