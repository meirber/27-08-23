// קלאס פרסון
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

// קלאס פציינט
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

//  קלאס צוות רפואי
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

// קלאס דוקטור
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
            if (date.toLocaleDateString() === slot.toLocaleDateString()) {
                return true;
            }
        }
        return false;
    }
}

// קלאס תורים
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

// קלאס בית חולים

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
        if (appointment.doctor.isAvailable(appointment.date)) {
            this.appointments.push(appointment);
            for (let i = 0; i <  appointment.doctor.availability.length; i++) {
                if (appointment.date.toLocaleDateString() === appointment.doctor.availability[i].toLocaleDateString())
                appointment.doctor.availability.splice(i, 1)
            }
        }
        else console.log("It is not possible to make an appointment for the requested date");
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

// יצירת בית חולים
const hospital1 = new Hospital([], [], [], "Medical Center", []);

// יצירת פציינט 1
const patient1 = new Patient(1, "meir", "levi", 24, "dover 6", "0533123243", "0505050555", []);
// הוספת פציינט 1 לבית חולים
hospital1.addPatient(patient1);

// יצירת פציינט 2
const patient2 = new Patient(2, "shalom", "mor", 27, "color 9", "0556747657", "0505000000", []);
// הוספת פציינט 2 לבית חולים
hospital1.addPatient(patient2);

// יצירת דוקטור
const doctor1 = new Doctor(1, "Cardiology", "noam", "gavish", 50, "molo 56", 8789, 3, 12, [new Date("2023/08/27"), new Date("2023/12/30")]);
// הוספת הדוקטור לבית חולים
hospital1.addDoctor(doctor1);

// יצירת דוקטור 2
const doctor2 = new Doctor(2, "Pediatrician", "ami", "chohen", 65, "fgh 45", 2324, 1, 10, [new Date("2023/09/27"), new Date("2023/11/20")]);
// הוספת הדוקטור לבית חולים
hospital1.addDoctor(doctor2);

// יצירת תור
const appointment1 = new Appointment(patient1, doctor1, new Date("2023/11/04"), "10:30", "Planned");
hospital1.addAppointment(appointment1);
// יצירת תור
const appointment2 = new Appointment(patient1, doctor2, new Date("2023/11/05"), "13:30", "Planned");
hospital1.addAppointment(appointment2);
// יצירת תור
const appointment3 = new Appointment(patient2, doctor2, new Date("2023/09/27"), "12:00", "Planned");
hospital1.addAppointment(appointment3);

hospital1.ShowingAllQueues();

hospital1.DisplayingDoctorsAppointmentsByID(2);

hospital1.DisplayingpatientAppointmentsByID(1);

hospital1.ShowingTodaysQueues();

// קלאס תיק רפואי
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