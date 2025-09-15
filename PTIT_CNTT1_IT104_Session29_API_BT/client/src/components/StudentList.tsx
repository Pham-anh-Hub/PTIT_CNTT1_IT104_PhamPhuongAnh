import React from "react";

interface Student {
  id?: number;
  studentName: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  createAt: string;
}

type PropType = {
  students: Student[];
  onDeleteStudent : (id:number) => void
};

export default function StudentList({ students, onDeleteStudent }: PropType) {
  return (
    <div className="w-[98vw] p-3 border-1 text-center">
      <table
        className="w-full border border-gray-400 border-collapse"
        border={1}
      >
        <thead>
          <tr className="border text-xl border-gray-400 border-collapse">
            <th>
              <div>
                <input className="w-5 h-5" type="checkbox" />
              </div>
            </th>
            <th className="p-4.5 ">Tên sinh viên</th>
            <th className="p-4.5 ">Email</th>
            <th className="p-4.5 ">Địa chỉ</th>
            <th className="p-4.5 ">Số điện thoại</th>
            <th className="p-4.5 ">Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              className="border p-4 border-gray-400 border-collapse"
              key={student.id}
            >
              <td className="p-3">
                <input className="w-5 h-5" type="checkbox" />
              </td>
              <td className="p-3">{student.studentName}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">{student.address}</td>
              <td className="p-3">{student.phone}</td>
              <td className="p-3">
                <span>✏️</span>
                <span className="cursor-pointer" onClick={() => onDeleteStudent(Number(student.id))}>🗑️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-around pt-3">
        <div className="text-gray-500">Hiển thị <b>{students.length}/{students.length}</b> bản ghi</div>
        <div>Pagination</div>
      </div>
    </div>
  );
}
