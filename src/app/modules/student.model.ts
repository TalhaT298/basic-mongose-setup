import { Schema, model, } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student/student.interface';

const UserNameSchema=new Schema<UserName>({
    
        firstName:{
            type:String,
            required:true,
        },
        middlename:{
            type:String,

        },
        lastName:{
            type:String,
            required:true,
        }
    
})

const guardianSchema=new Schema<Guardian>(
    {
        fatherName:{
            type:String,
            require:true,
        },
        fatherOccupation:{
            type:String,
            require:true,
        },
        fatcherContectNo:{
            type:String,
            require:true,
        },
        motherName:{
            type:String,
            require:true,
        },
        motherOccupation:{
            type:String,
            require:true,
        },
        motherContectNo:{
            type:String,
            require:true,
        },

    }
)

const localGuardianSchema=new Schema<LocalGuardian>(
    {
        name:{
            type:String,
            required:true,
        },
        occupation:{
            type:String,
            required:true,
        },
        contactNo:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },

    },
)

const studentShema= new Schema<Student>({
    id:{type:String},
    name:UserNameSchema,
    
    gender:['male','female'],
    dateOfBirth:{type:String},
    email:{type:String,required:true},
    contactNo:{type:String,required:true},
    emergencyContactNO:{type:String,required:true},
    bloodGroup:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    presentAddress:{type:String,required:true},
    permanentAddress:{type:String,required:true},
    guardian:guardianSchema,
    localGuardian:localGuardianSchema,
    profileImg:{type:String},
    isActive: ['active', 'blocked'],

})

export const StudentModel = model<Student>('Student', studentShema);