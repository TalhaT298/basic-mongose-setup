
export type Guardian={
    fatherName:string;
    fatherOccupation:string;
    fatcherContectNo:string;
    motherName:string;
    motherOccupation:string;
    motherContectNo:string;
}

export type UserName={
    firstName:string;
    middlename:string;
    lastName:string;
}

export type LocalGuardian={
    name:string;
    occupation:string;
    contactNo:string;
    address:string;
}

export type Student={
    id:string;
    name:UserName;
    gender:"male"|"female";
    dateOfBirth:string;
    email:string;
    contactNo:string;
    emergencyContactNO:string;
    bloodGroup:'A+'|'A-'|'B+'|'B-'|'AB+'|'AB-'|'O+'|'O-';
    presentAddress:string;
    permanentAddress:string;
    guardian:Guardian;
    localGuardian:LocalGuardian;
    profileImg?: string;
    isActive:'active'|'blocked'
};