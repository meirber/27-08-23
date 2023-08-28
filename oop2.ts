abstract class Person {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    constructor(firstName: string, lastName: string, age: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    getInfo(): string {
        return `full name: ${this.firstName} ${this.lastName}`
    }
}

class Patient extends Person {
    patientID: number;
    phoneNumbe: string;
    emergencyContact: string;
    medicalHistory: Appointment[];
    constructor(patientID: number, firstName: string, lastName: string, age: number, address: string, phoneNumbe: string, emergencyContact: string, medicalHistory: Appointment[]) {
        super(firstName, lastName, age, address);
        this.patientID = patientID;
        this.phoneNumbe = phoneNumbe;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    };

    getInfo(): string {
        return `patientID: ${this.patientID}, name: ${this.firstName} ${this.lastName}`;
    }

    addMedicalHistory(appointment: Appointment): void {
        this.medicalHistory.push(appointment)
    }
}
// const newPatuent = new Patient(10, "meir", "ber");
// console.log(newPatuent);
// newPatuent.getInfo();

class MedicalStaff extends Person {
    staffID: number;
    position: number;
    department: number;

    constructor(firstName: string, lastName: string, age: number, address: string, staffID: number, position: number, department: number) {
        super(firstName, lastName, age, address)
        this.staffID = staffID;
        this.position = position;
        this.department = department;
    }
}

class Doctor extends MedicalStaff {
    doctorID: number;
    specialization: string;
    availability: Date[];
    constructor(doctorID: number, specialization: string, firstName: string, lastName: string, age: number, address: string, staffID: number, position: number, department: number, availability: Date[]) {
        super(firstName, lastName, age, address, staffID, position, department)
        this.doctorID = doctorID;
        this.specialization = specialization;
        this.availability = availability;
    }
    getInfo(): string {
        return `doctor id: ${this.doctorID}, name: ${this.firstName} ${this.lastName}, specialization: ${this.specialization}`;

    }

    isAvailable(date: Date): boolean {
        for (const slot of this.availability) {
            if (date.toLocaleDateString === slot.toLocaleDateString) {
                return false;
            }
        }
        return true;
    }
}

// const newDoctor = new Doctor(10, "tooth", "meir", "ber");
// console.log(newDoctor);
// newDoctor.getInfo();

class Appointment {
    patient: Patient;
    doctor: Doctor;
    date: Date;
    time: string;
    status: "Planned" | "Completed" | "Cancelled";

    constructor(patient: Patient, doctor: Doctor, date: Date, time: string, status: "Planned" | "Completed" | "Cancelled") {
        this.patient = patient;
        this.doctor = doctor;
        this.date = new Date(date);
        this.time = time;
        this.status = "Planned";
    }
    markAsCompleted(): void {
        this.status = "Completed";
    }

    markAsCancelled(): void {
        this.status = "Cancelled";
    }
    getInfo() {
        console.log(`${this.patient.getInfo()}, ${this.doctor.getInfo()}, date: ${this.date.toLocaleDateString()}, time: ${this.time}`);
    }


}

// const newAppointment = new Appointment(new Patient(10, "meir", "ber"), new Doctor(1, "family medicine", "moris", "morst"), new Date("2023/08/27"), "14:22")
// newAppointment.getInfo()

class Hospital {
    patients: Patient[];
    doctors: Doctor[];
    appointments: Appointment[];
    hospital: string;
    medicalRecord: MedicalRecord[];

    constructor(patients: Patient[], doctors: Doctor[], appointments: Appointment[], hospital: string, medicalRecord: MedicalRecord[]) {
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
        this.hospital = hospital;
        this.medicalRecord = medicalRecord;
    }

    addPatient(patient: Patient): void {
        this.patients.push(patient)
    }


    addDoctor(doctor: Doctor): void {
        this.doctors.push(doctor)
    }

    addAppointment(appointment: Appointment): void {
        this.appointments.push(appointment)
    }

    ShowingAllQueues() {
        this.appointments.forEach(appointment => appointment.getInfo())
    }

    DisplayingDoctorsAppointmentsByID(id: number): void {
        let filterAppointments: Appointment[] = this.appointments.filter((appointment: Appointment): boolean => appointment.doctor.doctorID === id)
        console.log(filterAppointments);
    }

    DisplayingpatientAppointmentsByID(id: number): void {
        let filterAppointments: Appointment[] = this.appointments.filter((appointment: Appointment): boolean => appointment.patient.patientID === id)
        console.log(filterAppointments);
    }

    ShowingTodaysQueues(): void {
        let today = new Date().toLocaleDateString()
        let filterAppointments: Appointment[] = this.appointments.filter((appointment: Appointment): boolean => appointment.date.toLocaleDateString() === today)
        console.log(filterAppointments);
    }

    doctorBySpecialty(specialization: string): void {
        const doctorBySpecialty = this.doctors.forEach(doctor => doctor.specialization === specialization);
        console.log(doctorBySpecialty);
    }
    createMedicalRecord() {

    }
}

const hospital1 = new Hospital([], [], [], "Medical Center", []);

const patient1 = new Patient(1, "meir", "levi", 24, "dover 6", "0533123243", "0505050555", [] );
hospital1.addPatient(patient1);
const patient2 = new Patient(2, "shalom", "mor",  27, "dover 9", "0556747657", "0505000000", [] );
hospital1.addPatient(patient2);
const doctor1 = new Doctor(1, "Cardiology", "noam", "gavish", 50, "molo 56", 8789, 3, 12, [new Date ("2023/08/27"), new Date ("2023/12/30")]);
hospital1.addDoctor(doctor1);
const doctor2 = new Doctor(2, "Pediatrician", "ami", "chohen", 65, "fgh 45", 2324, 1, 10, [new Date ("2023/09/27"), new Date ("2023/11/20")]);
hospital1.addDoctor(doctor2);

const appointment1 = new Appointment(patient1, doctor1, new Date("2023/11/04"), "10:30", "Planned");
hospital1.addAppointment(appointment1);

const appointment2 = new Appointment(patient1, doctor2, new Date("2023/11/05"), "13:30","Planned");
hospital1.addAppointment(appointment2);

const appointment3 = new Appointment(patient2, doctor2, new Date("2023/08/28"), "12:00", "Planned");
hospital1.addAppointment(appointment3);

hospital1.ShowingAllQueues();

hospital1.DisplayingDoctorsAppointmentsByID(2);

hospital1.DisplayingpatientAppointmentsByID(1);

hospital1.ShowingTodaysQueues();


class MedicalRecord {
    patient: Patient;
    doctor: Doctor;
    diagnosis: string;
    prescription: string;

    constructor(patient: Patient, doctor: Doctor, diagnosis: string, prescription: string) {
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.prescription = prescription;
    }
}