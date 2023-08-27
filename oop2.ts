class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Patient extends Person {
    patientID: number;
    constructor(patientID: number, firstName: string, lastName: string) {
        super(firstName, lastName);
        this.patientID = patientID;
    };

    getPatientInfo(): string {
        return `patientID: ${this.patientID}, name: ${this.firstName} ${this.lastName}`;
    }
}
// const newPatuent = new Patient(10, "meir", "ber");
// console.log(newPatuent);
// newPatuent.getPatientInfo();

class Doctor extends Person {
    doctorID: number;
    specialization: string;
    constructor(doctorID: number, specialization: string, firstName: string, lastName: string) {
        super(firstName, lastName);
        this.doctorID = doctorID;
        this.specialization = specialization
    }
    getDoctorInfo(): string {
        return `doctor id: ${this.doctorID}, name: ${this.firstName} ${this.lastName}, specialization: ${this.specialization}`;

    }
}
// const newDoctor = new Doctor(10, "tooth", "meir", "ber");
// console.log(newDoctor);
// newDoctor.getDoctorInfo();

class Appointment {
    patient: Patient;
    doctor: Doctor;
    date: Date;
    time: string;

    constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = new Date(date);
        this.time = time;
    }

    getAppointmentInfo() {
        console.log(`${this.patient.getPatientInfo()}, ${this.doctor.getDoctorInfo()}, date: ${this.date.getDate()}, time: ${this.time}`);

    }
}

const newAppointment = new Appointment(new Patient(10, "meir", "ber"), new Doctor(1, "family medicine", "moris", "morst"), "27/08/23", "14:22")
newAppointment.getAppointmentInfo()

class Hospital {
    patients: Patient[];
    doctors: Doctor[];
    appointments: Appointment[];
    hospital: string;

    constructor(patients: Patient[], doctors: Doctor[], appointments: Appointment[], hospital: string) {
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
        this.hospital = hospital;
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
        this.appointments.forEach(appointment => appointment.getAppointmentInfo())
    }

    DisplayingDoctorsAppointmentsByID(id: number): void {
        let filterAppointments: Appointment[] = this.appointments.filter((appointment: Appointment):boolean => appointment.doctor.doctorID === id) 
        console.log(filterAppointments);
    }

    DisplayingpatientAppointmentsByID(id: number): void {
        let filterAppointments: Appointment[] = this.appointments.filter((appointment: Appointment):boolean => appointment.patient.patientID === id) 
        console.log(filterAppointments);
    }

    ShowingTodaysQueues(id: number): void {
        let filterAppointments: Appointment[] = this.appointments.filter((appointment: Appointment):boolean => appointment.patient.patientID === id) 
        console.log(filterAppointments);
    }
}