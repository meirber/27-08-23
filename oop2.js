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
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(patientID, firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.patientID = patientID;
        return _this;
    }
    ;
    Patient.prototype.getPatientInfo = function () {
        return "patientID: ".concat(this.patientID, ", name: ").concat(this.firstName, " ").concat(this.lastName);
    };
    return Patient;
}(Person));
// const newPatuent = new Patient(10, "meir", "ber");
// console.log(newPatuent);
// newPatuent.getPatientInfo();
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(doctorID, specialization, firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.doctorID = doctorID;
        _this.specialization = specialization;
        return _this;
    }
    Doctor.prototype.getDoctorInfo = function () {
        return "doctor id: ".concat(this.doctorID, ", name: ").concat(this.firstName, " ").concat(this.lastName, ", specialization: ").concat(this.specialization);
    };
    return Doctor;
}(Person));
// const newDoctor = new Doctor(10, "tooth", "meir", "ber");
// console.log(newDoctor);
// newDoctor.getDoctorInfo();
var Appointment = /** @class */ (function () {
    function Appointment(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = new Date(date);
        this.time = time;
    }
    Appointment.prototype.getAppointmentInfo = function () {
        console.log("".concat(this.patient.getPatientInfo(), ", ").concat(this.doctor.getDoctorInfo(), ", date: ").concat(this.date.toLocaleDateString(), ", time: ").concat(this.time));
    };
    return Appointment;
}());
var newAppointment = new Appointment(new Patient(10, "meir", "ber"), new Doctor(1, "family medicine", "moris", "morst"), new Date("2023/08/27"), "14:22");
newAppointment.getAppointmentInfo();
var Hospital = /** @class */ (function () {
    function Hospital(patients, doctors, appointments, hospital) {
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
        this.hospital = hospital;
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
        this.appointments.forEach(function (appointment) { return appointment.getAppointmentInfo(); });
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
    return Hospital;
}());
