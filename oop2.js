var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getInfo = function () {
        return "full name: ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(patientID, firstName, lastName, age, address, phoneNumbe, emergencyContact, medicalHistory) {
        var _this = _super.call(this, firstName, lastName, age, address) || this;
        _this.patientID = patientID;
        _this.phoneNumbe = phoneNumbe;
        _this.emergencyContact = emergencyContact;
        _this.medicalHistory = medicalHistory;
        return _this;
    }
    ;
    Patient.prototype.getInfo = function () {
        return "patientID: ".concat(this.patientID, ", name: ").concat(this.firstName, " ").concat(this.lastName);
    };
    Patient.prototype.addMedicalHistory = function (appointment) {
        this.medicalHistory.push(appointment);
    };
    return Patient;
}(Person));
// const newPatuent = new Patient(10, "meir", "ber");
// console.log(newPatuent);
// newPatuent.getInfo();
var MedicalStaff = /** @class */ (function (_super) {
    __extends(MedicalStaff, _super);
    function MedicalStaff(firstName, lastName, age, address, staffID, position, department) {
        var _this = _super.call(this, firstName, lastName, age, address) || this;
        _this.staffID = staffID;
        _this.position = position;
        _this.department = department;
        return _this;
    }
    return MedicalStaff;
}(Person));
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(doctorID, specialization, firstName, lastName, age, address, staffID, position, department, availability) {
        var _this = _super.call(this, firstName, lastName, age, address, staffID, position, department) || this;
        _this.doctorID = doctorID;
        _this.specialization = specialization;
        _this.availability = availability;
        return _this;
    }
    Doctor.prototype.getInfo = function () {
        return "doctor id: ".concat(this.doctorID, ", name: ").concat(this.firstName, " ").concat(this.lastName, ", specialization: ").concat(this.specialization);
    };
    Doctor.prototype.isAvailable = function (date) {
        for (var _i = 0, _a = this.availability; _i < _a.length; _i++) {
            var slot = _a[_i];
            if (date.toLocaleDateString === slot.toLocaleDateString) {
                return false;
            }
        }
        return true;
    };
    return Doctor;
}(MedicalStaff));
// const newDoctor = new Doctor(10, "tooth", "meir", "ber");
// console.log(newDoctor);
// newDoctor.getInfo();
var Appointment = /** @class */ (function () {
    function Appointment(patient, doctor, date, time, status) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = new Date(date);
        this.time = time;
        this.status = "Planned";
    }
    Appointment.prototype.markAsCompleted = function () {
        this.status = "Completed";
    };
    Appointment.prototype.markAsCancelled = function () {
        this.status = "Cancelled";
    };
    Appointment.prototype.getInfo = function () {
        console.log("".concat(this.patient.getInfo(), ", ").concat(this.doctor.getInfo(), ", date: ").concat(this.date.toLocaleDateString(), ", time: ").concat(this.time));
    };
    return Appointment;
}());
// const newAppointment = new Appointment(new Patient(10, "meir", "ber"), new Doctor(1, "family medicine", "moris", "morst"), new Date("2023/08/27"), "14:22")
// newAppointment.getInfo()
var Hospital = /** @class */ (function () {
    function Hospital(patients, doctors, appointments, hospital, medicalRecord) {
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
        this.hospital = hospital;
        this.medicalRecord = medicalRecord;
    }
    Hospital.prototype.addPatient = function (patient) {
        this.patients.push(patient);
    };
    Hospital.prototype.addDoctor = function (doctor) {
        this.doctors.push(doctor);
    };
    Hospital.prototype.addAppointment = function (appointment) {
        this.appointments.push(appointment);
    };
    Hospital.prototype.ShowingAllQueues = function () {
        this.appointments.forEach(function (appointment) { return appointment.getInfo(); });
    };
    Hospital.prototype.DisplayingDoctorsAppointmentsByID = function (id) {
        var filterAppointments = this.appointments.filter(function (appointment) { return appointment.doctor.doctorID === id; });
        console.log(filterAppointments);
    };
    Hospital.prototype.DisplayingpatientAppointmentsByID = function (id) {
        var filterAppointments = this.appointments.filter(function (appointment) { return appointment.patient.patientID === id; });
        console.log(filterAppointments);
    };
    Hospital.prototype.ShowingTodaysQueues = function () {
        var today = new Date().toLocaleDateString();
        var filterAppointments = this.appointments.filter(function (appointment) { return appointment.date.toLocaleDateString() === today; });
        console.log(filterAppointments);
    };
    Hospital.prototype.doctorBySpecialty = function (specialization) {
        var doctorBySpecialty = this.doctors.forEach(function (doctor) { return doctor.specialization === specialization; });
        console.log(doctorBySpecialty);
    };
    Hospital.prototype.createMedicalRecord = function () {
    };
    return Hospital;
}());
var hospital1 = new Hospital([], [], [], "Medical Center", []);
var patient1 = new Patient(1, "meir", "levi", 24, "dover 6", "0533123243", "0505050555", []);
hospital1.addPatient(patient1);
var patient2 = new Patient(2, "shalom", "mor", 27, "dover 9", "0556747657", "0505000000", []);
hospital1.addPatient(patient2);
var doctor1 = new Doctor(1, "Cardiology", "noam", "gavish", 50, "molo 56", 8789, 3, 12, [new Date("2023/08/27"), new Date("2023/12/30")]);
hospital1.addDoctor(doctor1);
var doctor2 = new Doctor(2, "Pediatrician", "ami", "chohen", 65, "fgh 45", 2324, 1, 10, [new Date("2023/09/27"), new Date("2023/11/20")]);
hospital1.addDoctor(doctor2);
var appointment1 = new Appointment(patient1, doctor1, new Date("2023/11/04"), "10:30", "Planned");
hospital1.addAppointment(appointment1);
var appointment2 = new Appointment(patient1, doctor2, new Date("2023/11/05"), "13:30", "Planned");
hospital1.addAppointment(appointment2);
var appointment3 = new Appointment(patient2, doctor2, new Date("2023/08/28"), "12:00", "Planned");
hospital1.addAppointment(appointment3);
hospital1.ShowingAllQueues();
hospital1.DisplayingDoctorsAppointmentsByID(2);
hospital1.DisplayingpatientAppointmentsByID(1);
hospital1.ShowingTodaysQueues();
var MedicalRecord = /** @class */ (function () {
    function MedicalRecord(patient, doctor, diagnosis, prescription) {
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.prescription = prescription;
    }
    return MedicalRecord;
}());
