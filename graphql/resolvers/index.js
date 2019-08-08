// Testing unHeard and Delete Retrieve Requests

//// Models
// Users
const Participant = require('../../schema/models/Users/Participant')
const Admin = require('../../schema/models/Users/Admin')
const Trainer = require('../../schema/models/Users/Trainer')
const Organization = require('../../schema/models/Users/Organization')

// Resources
const Academy = require('../../schema/models/Resources/Academy')
const Announcement = require('../../schema/models/Resources/Announcement')
const Application = require('../../schema/models/Resources/Application')
const Blog = require('../../schema/models/Resources/Blog')
const Certificate = require('../../schema/models/Resources/Certificate')
const Course = require('../../schema/models/Resources/Course')
const Event = require('../../schema/models/Resources/Event')
const FAQ = require('../../schema/models/Resources/FAQ')
const Feedback = require('../../schema/models/Resources/Feedback')
const Msg = require('../../schema/models/Resources/Msg')
const Query = require('../../schema/models/Resources/Query')
const Quicklink = require('../../schema/models/Resources/Quicklink')
const Report = require('../../schema/models/Resources/Report')
const Workshop = require('../../schema/models/Resources/Workshop')

// Fields
const ReportField = require('../../schema/models/Fields/ReportField')
const FeedbackField = require('../../schema/models/Fields/FeedbackField')

// utils
const Action = require('../../schema/models/utils/Action')
const Attendance = require('../../schema/models/utils/Attendance')

//// Auth
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    admin: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Admin.findById(req.userId)
        }
        catch (err) {
            return err
        }
    },
    participant: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Participant.findById(req.userId)
        }
        catch (err) {
            return err
        }
    },
    trainer: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Trainer.findById(req.userId)
        }
        catch (err) {
            return err
        }
    },
    organization: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Organization.findById(req.userId)
        }
        catch (err) {
            return err
        }
    },
    adminById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Admin.findById(args.adminId)
        }
        catch (err) {
            return err
        }
    },
    participantById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Participant.findById(args.participantId)
        }
        catch (err) {
            return err
        }
    },
    trainerById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Trainer.findById(args.trainerId)
        }
        catch (err) {
            return err
        }
    },
    organizationById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Organization.findById(args.organizationId)
        }
        catch (err) {
            return err
        }
    },
    admins: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Admin.find()
        }
        catch (err) {
            return err
        }
    },
    participants: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Participant.find()
        }
        catch (err) {
            return err
        }
    },
    trainers: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Trainer.find()
        }
        catch (err) {
            return err
        }
    },
    organizations: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Organization.find()
        }
        catch (err) {
            return err
        }
    },
    eventById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Event.findById(args.eventId)
        }
        catch (err) {
            return err
        }
    },
    events: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Event.find()
        }
        catch (err) {
            return err
        }
    },
    workshopById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Workshop.findById(args.workshopId)
        }
        catch (err) {
            return err
        }
    },
    workshops: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Workshop.find()
        }
        catch (err) {
            return err
        }
    },
    announcementById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Announcement.findById(args.announcementId)
        }
        catch (err) {
            return err
        }
    },
    announcements: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Announcement.find()
        }
        catch (err) {
            return err
        }
    },
    faqById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await FAQ.findById(args.faqId)
        }
        catch (err) {
            return err
        }
    },
    faqs: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await FAQ.find()
        }
        catch (err) {
            return err
        }
    },
    msgById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Msg.findById(args.msgId)
        }
        catch (err) {
            return err
        }
    },
    msgs: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Msg.find()
        }
        catch (err) {
            return err
        }
    },
    reportById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Report.findById(args.reportId)
        }
        catch (err) {
            return err
        }
    },
    reports: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Report.find()
        }
        catch (err) {
            return err
        }
    },
    academyById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Academy.findById(args.academyId)
        }
        catch (err) {
            return err
        }
    },
    academies: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Academy.find()
        }
        catch (err) {
            return err
        }
    },
    certificateById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Certificate.findById(args.certificateId)
        }
        catch (err) {
            return err
        }
    },
    certificates: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Msg.find()
        }
        catch (err) {
            return err
        }
    },
    feedbackById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Feedback.findById(args.feedbackId)
        }
        catch (err) {
            return err
        }
    },
    feedbacks: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Feedback.find()
        }
        catch (err) {
            return err
        }
    },
    quickLink: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Quicklink.findById(args.quicklinkId)
        }
        catch (err) {
            return err
        }
    },
    quickLinks: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Quicklink.find()
        }
        catch (err) {
            return err
        }
    },
    queryById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Query.findById(args.queryId)
        }
        catch (err) {
            return err
        }
    },
    queries: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Query.find()
        }
        catch (err) {
            return err
        }
    },
    courseById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Course.findById(args.courseId)
        }
        catch (err) {
            return err
        }
    },
    courses: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Course.find()
        }
        catch (err) {
            return err
        }
    },
    blogById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Blog.findById(args.blogId)
        }
        catch (err) {
            return err
        }
    },
    blogs: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Blog.find()
        }
        catch (err) {
            return err
        }
    },
    feedbackFieldById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await FeedbackField.findById(args.feedbackFieldId)
        }
        catch (err) {
            return err
        }
    },
    feedbackFields: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await FeedbackField.find()
        }
        catch (err) {
            return err
        }
    },
    reportFieldById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await ReportField.findById(args.reportFieldId)
        }
        catch (err) {
            return err
        }
    },
    reportFields: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await ReportField.find()
        }
        catch (err) {
            return err
        }
    },
    attendanceById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Attendance.findById(args.attendanceId)
        }
        catch (err) {
            return err
        }
    },
    attendances: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Attendance.find()
        }
        catch (err) {
            return err
        }
    },
    applicationById: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Application.findById(args.applicationId)
        }
        catch (err) {
            return err
        }
    },
    applications: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Application.find()
        }
        catch (err) {
            return err
        }
    },
    trainerApplications: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Application.find({trainer: args.trainerId})
        }
        catch (err) {
            return err
        }
    },
    organizationApplications: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Application.find({organization: args.organizationId})
        }
        catch (err) {
            return err
        }
    },
    trainerWorkshops: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Workshop.find({trainer: args.trainerId})
        }
        catch (err) {
            return err
        }
    },
    organizationWorkshops: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Workshop.find({organization: args.organizationId})
        }
        catch (err) {
            return err
        }
    },
    participantWorkshops: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            return await Workshop.find({participants: {$in: args.organizationId}})
        }
        catch (err) {
            return err
        }
    },
    loginParticipant: async (args, req) => {
        try {
            const participant = await Participant.findOne({ email: args.method })
            if(!participant) {
                console.log('User does not Exist')
                throw new Error('User does not exist')
            }
            const isEqual = await bcrypt.compare(args.password, student.password)
            if(!isEqual) throw new Error('Invalid Password')
            const token = jwt.sign({userId: participant.id}, 'ninenine', {
                expiresIn: '24h'
            })
            return { userId: participant.id, token: token, typeUser: 'Participant', tokenExpiration: 24 }
        }
        catch (err) {
            return err
        }
    },
    loginAdmin: async (args, req) => {
        try {
            const admin = await Admin.findOne({ email: args.method })
            if(!admin) {
                console.log('User does not Exist')
                throw new Error('User does not exist')
            }
            const isEqual = await bcrypt.compare(args.password, admin.password)
            if(!isEqual) throw new Error('Invalid Password')
            const token = jwt.sign({userId: admin.id}, 'ninenine', {
                expiresIn: '24h'
            })
            return { userId: admin.id, token: token, typeUser: 'Admin', tokenExpiration: 24 }
        }
        catch (err) {
            return err
        }
    },
    loginTrainer: async (args, req) => {
        try {
            const trainer = await Trainer.findOne({ email: args.method })
            if(!trainer) {
                console.log('User does not Exist')
                throw new Error('User does not exist')
            }
            const isEqual = await bcrypt.compare(args.password, trainer.password)
            if(!isEqual) throw new Error('Invalid Password')
            const token = jwt.sign({userId: trainer.id}, 'ninenine', {
                expiresIn: '24h'
            })
            return { userId: trainer.id, token: token, typeUser: 'Trainer', tokenExpiration: 24 }
        }
        catch (err) {
            return err
        }
    },
    loginOrganization: async (args, req) => {
        try {
            const organization = await Organization.findOne({ email: args.method })
            if(!organnization) {
                console.log('User does not Exist')
                throw new Error('User does not exist')
            }
            const isEqual = await bcrypt.compare(args.password, organization.password)
            if(!isEqual) throw new Error('Invalid Password')
            const token = jwt.sign({userId: organization.id}, 'ninenine', {
                expiresIn: '24h'
            })
            return { userId: organization.id, token: token, typeUser: 'Organization', tokenExpiration: 24 }
        }
        catch (err) {
            return err
        }
    },
    createParticipant: async (args) => {
        try {
            // const participant = await Participant.findOne({ $or: [ {email: args.participantInput.email}, {phoneNumber: args.participantInput.phoneNumber} ] })
            const participant = await Participant.findOne({ $or: [ {email: args.participantInput.email} ] })
            if(participant) {
                throw new Error('Participant exists already')
            }
            const hashedPassword = await bcrypt.hash(args.participantInput.password, 12)
            const newParticipant = new Participant({
                name: args.participantInput.name,
                email: args.participantInput.email,
                password: hashedPassword,
                dateJoined: new Date().toDateString()
            })
            savedParticipant = await newParticipant.save()
            const token = jwt.sign({userId: savedParticipant.id}, 'ninenine', {
                expiresIn: '24h'
            })
            return { userId: savedParticipant.id, token: token, typeUser: 'Participant', tokenExpiration: 24 }
        }
        catch (err) {
            console.log('Error creating this participant: ', err)
            return err
        }
    },
    createAdmin: async (args) => {
        try {
            // const participant = await Participant.findOne({ $or: [ {email: args.participantInput.email}, {phoneNumber: args.participantInput.phoneNumber} ] })
            const admin = await Admin.findOne({ $or: [ {email: args.adminInput.email} ] })
            if(admin) {
                throw new Error('Admin exists already')
            }
            const hashedPassword = await bcrypt.hash(args.adminInput.password, 12)
            const newAdmin = new Admin({
                name: args.adminInput.name,
                email: args.adminInput.email,
                password: hashedPassword,
                dateJoined: new Date().toDateString()
            })
            savedAdmin = await newAdmin.save()
            const token = jwt.sign({userId: savedAdmin.id}, 'ninenine', {
                expiresIn: '24h'
            })
            return { userId: savedAdmin.id, token: token, typeUser: 'Admin', tokenExpiration: 24 }
        }
        catch (err) {
            console.log('Error creating this admin: ', err)
            return err
        }
    },
    createTrainer: async (args) => {
        try {
            // const participant = await Participant.findOne({ $or: [ {email: args.participantInput.email}, {phoneNumber: args.participantInput.phoneNumber} ] })
            const trainer = await Trainer.findOne({ $or: [ {email: args.trainerInput.email} ] })
            if(trainer) {
                throw new Error('Trainer exists already')
            }
            const hashedPassword = await bcrypt.hash(args.trainerInput.password, 12)
            const newTrainer = new Trainer({
                name: args.trainerInput.name,
                email: args.trainerInput.email,
                password: hashedPassword,
                dateJoined: new Date().toDateString()
            })
            savedTrainer = await newTrainer.save()
            const token = jwt.sign({userId: savedTrainer.id}, 'ninenine', {
                expiresIn: '24h'
            })
            return { userId: savedTrainer.id, token: token, typeUser: 'Trainer', tokenExpiration: 24 }
        }
        catch (err) {
            console.log('Error creating this trainer: ', err)
            return err
        }
    },
    createOrganization: async (args) => {
        try {
            // const participant = await Participant.findOne({ $or: [ {email: args.participantInput.email}, {phoneNumber: args.participantInput.phoneNumber} ] })
            const organization = await Organization.findOne({ $or: [ {email: args.organizationInput.email} ] })
            if(organization) {
                throw new Error('Organization exists already')
            }
            const hashedPassword = await bcrypt.hash(args.organizationInput.password, 12)
            const newOrganization = new Organization({
                name: args.organizationInput.name,
                email: args.organizationInput.email,
                password: hashedPassword,
                dateJoined: new Date().toDateString()
            })
            savedOrganization = await newOrganization.save()
            const token = jwt.sign({userId: savedOrganization.id}, 'ninenine', {
                expiresIn: '24h'
            })
            return { userId: savedOrganization.id, token: token, typeUser: 'Organization', tokenExpiration: 24 }
        }
        catch (err) {
            console.log('Error creating this organization: ', err)
            return err
        }
    },
    createCourse: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const course = new Course({
                name: args.courseInput.name,
                description: args.courseInput.description,
                dateCreated: new Date().toDateString()
            })
            return await course.save()
        }
        catch (err) {
            console.log('Error creating a new course: ', err)
            return err
        }
    },
    createAcademy: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const academy = new Academy({
                name: args.academyInput.name,
                email: args.academyInput.email,
                states: args.academyInput.states,
                status: 'Active',
                dateCreated: new Date().toDateString()
            })
            return await academy.save()
        }
        catch (err) {
            console.log('Error creating a new academy: ', err)
            return err
        }
    },
    editAcademy: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const academy = await Academy.findById(args.academyId)
            await Academy.findByIdAndUpdate(args.academyInput.academyId, {
                name: (args.academyInput.name ? args.academyInput.name : academy.name),
                email: (args.academyInput.email ? args.academyInput.email : academy.email),
                states: (args.academyInput.states ? args.academyInput.states : academy.states),
                workshops: (args.academyInput.workshops ? args.academyInput.workshops : academy.workshops)
            }, {new: true})
            return 'Updated'
        }
        catch (err) {
            console.log('Error editing the Academy: ', err)
            return err
        }
    },
    deleteAcademy: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            await Academy.findByIdAndUpdate(args.academyId, {status: 'Removed'})
            return 'Removed'
        }
        catch (err) {
            console.log('Error deleting announcement: ', err)
            return err
        }
    },
    addAnnouncement: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const announcement = new Announcement({
                title: args.announcementInput.title,
                subHeading: args.announcementInput.subHeading,
                bold: args.announcementInput.bold,
                link: args.announcementInput.link,
                author: req.userId,
                images: args.announcementInput.images,
                status: 'Show',
                dateCreated: new Date().toDateString()
            })
            return await announcement.save()
        }
        catch (err) {
            console.log('Error adding new announcement: ', err)
            return err
        }
    },
    editAnnouncement: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const announcement = await Announcement.findById(args.announcementId)
            await Announcement.findByIdAndUpdate(args.announcementInput.announcementId, {
                title: (args.announcementInput.title ? args.announcementInput.title : announcement.title),
                subHeading: (args.announcementInput.subHeading ? args.announcementInput.subHeading : announcement.subHeading),
                bold: (args.announcementInput.bold ? args.announcementInput.bold : announcement.bold),
                link: (args.announcementInput.link ? args.announcementInput.link : announcement.link),
                author: ((req.userId != announcement.author) ? req.userId : announcement.author),
                images: (args.announcementInput.images ? args.announcementInput.images : announcement.images)
            }, {new: true})
            return 'Updated'
        }
        catch (err) {
            console.log('Error editing the announcement: ', err)
            return err
        }
    },
    deleteAnnouncement: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            await Announcement.findByIdAndUpdate(args.announcementId, {status: 'Removed'})
            return 'Removed'
        }
        catch (err) {
            console.log('Error deleting announcement: ', err)
            return err
        }
    },
    addBlog: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const announcement = new Announcement({
                title: args.announcementInput.title,
                subHeading: args.announcementInput.subHeading,
                bold: args.announcementInput.bold,
                link: args.announcementInput.link,
                author: req.userId,
                images: args.announcementInput.images,
                dateCreated: new Date().toDateString()
            })
            return await announcement.save()
        }
        catch (err) {
            console.log('Error adding new announcement: ', err)
            return err
        }
    },
    editAnnouncement: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const announcement = await Announcement.findById(args.announcementId)
            await Announcement.findByIdAndUpdate(args.announcementInput.announcementId, {
                title: (args.announcementInput.title ? args.announcementInput.title : announcement.title),
                subHeading: (args.announcementInput.subHeading ? args.announcementInput.subHeading : announcement.subHeading),
                bold: (args.announcementInput.bold ? args.announcementInput.bold : announcement.bold),
                link: (args.announcementInput.link ? args.announcementInput.link : announcement.link),
                author: ((req.userId != announcement.author) ? req.userId : announcement.author),
                images: (args.announcementInput.images ? args.announcementInput.images : announcement.images)
            }, {new: true})
            return 'Updated'
        }
        catch (err) {
            console.log('Error editing the announcement: ', err)
            return err
        }
    },
    deleteAnnouncement: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            await Announcement.findByIdAndUpdate(args.announcementId, {status: 'Removed'})
            return 'Removed'
        }
        catch (err) {
            console.log('Error deleting announcement: ', err)
            return err
        }
    },
    addAnnouncement: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const announcement = new Announcement({
                title: args.announcementInput.title,
                subHeading: args.announcementInput.subHeading,
                bold: args.announcementInput.bold,
                link: args.announcementInput.link,
                author: req.userId,
                images: args.announcementInput.images,
                dateCreated: new Date().toDateString()
            })
            return await announcement.save()
        }
        catch (err) {
            console.log('Error adding new announcement: ', err)
            return err
        }
    },
    editAnnouncement: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const announcement = await Announcement.findById(args.announcementId)
            await Announcement.findByIdAndUpdate(args.announcementInput.announcementId, {
                title: (args.announcementInput.title ? args.announcementInput.title : announcement.title),
                subHeading: (args.announcementInput.subHeading ? args.announcementInput.subHeading : announcement.subHeading),
                bold: (args.announcementInput.bold ? args.announcementInput.bold : announcement.bold),
                link: (args.announcementInput.link ? args.announcementInput.link : announcement.link),
                author: ((req.userId != announcement.author) ? req.userId : announcement.author),
                images: (args.announcementInput.images ? args.announcementInput.images : announcement.images)
            }, {new: true})
            return 'Updated'
        }
        catch (err) {
            console.log('Error editing the announcement: ', err)
            return err
        }
    },
    deleteAnnouncement: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            await Announcement.findByIdAndUpdate(args.announcementId, {status: 'Removed'})
            return 'Removed'
        }
        catch (err) {
            console.log('Error deleting announcement: ', err)
            return err
        }
    },
    markAttendance: async (args, req) => {
        try {
            if(!req.isAuth) {
                throw new Error('Unauthenticated')
            }
            const session = await Session.findOne({sessionToken: args.token})
            console.log(session)
            if(session) {
                try {
                    var checkCourseFlag = false
                    const courseCheck = await Course.findOne({sessions: {$in : session._id}})
                    const studentCheck = await Student.findById(req.userId)
                    console.log('Course: ', courseCheck)
                    console.log('Student: ', studentCheck)
                    studentCheck.courses.map(course => {
                        console.log(course)
                        console.log(courseCheck._id)
                        if((course + '') == (courseCheck._id + '')) {
                            console.log('Done')
                            checkCourseFlag = true
                        }
                    })
                    if(!checkCourseFlag) {
                        return 'You dont belong to this Course'
                    }
                    if(session.isComplete) {
                        return('Session is now closed, Request late attendance')
                    }
                    for( i = 0; i < session.students.length; i++ ) {
                        if(session.students[i] == req.userId) {
                            return('Already marked attendance for this session')
                        }
                    }
                    const saveSession = await Session.findOneAndUpdate({
                        sessionToken: args.token
                    }, {
                        $inc: {attendance: 1},
                        $push: {students: req.userId} 
                    }, {
                        new: true
                    })
                    await Student.findByIdAndUpdate(
                        req.userId,
                        {
                            $push: { sessions: saveSession }
                        },
                        {
                            new: true
                        }
                    )
                    return 'Marked Present'
                }
                catch (err) {
                    return err
                }
            }
            else {
                return 'No Such Session Exists'
            }
        }
        catch (err) {
            return err
        }
    },
    deleteSession: async(args, req) => {
        try {
            if(!req.isAuth) {
                if(args.admin != null) {
                    req.userId = args.userId
                }
                else {
                    throw new Error('Unauthenticated')
                }
            }
            const sessionCourse = await Course.findOne({sessions: {$in: args.sessionId}})
            if(sessionCourse) {
                await Course.findByIdAndUpdate(sessionCourse._id, {$pull: {sessions: args.sessionId}}, {new: true})
            }
            const sessionStudents = await Session.findById(args.sessionId)
            sessionStudents.students.map(async student => {
                await Student.findByIdAndUpdate(student, {$pull: {sessions: args.sessionId}}, {new: true})
            })
            await Session.findByIdAndDelete(args.sessionId)
            return 'Done'
        }
        catch (err) {
            console.log('Error deleting the session: ', err)
            return err
        }
    },
    deleteStudent: async (args, req) => {
        try {
            if(!req.isAuth) {
                if(args.admin != null) {
                    req.userId = args.userId
                }
                else {
                    throw new Error('Unauthenticated')
                }
            }
            const studentCourses = await Course.find({students: {$in: args.studentId}})
            const studentSessions = await Session.find({students: {$in: args.studentId}})
            studentCourses.map(async course => {
                await Course.findByIdAndUpdate(course, {$pull: {students: args.studentId}})
            })
            studentSessions.map(async session => {
                await Session.findByIdAndUpdate(session, {$pull: {students: args.studentId}})
            })
            await Student.findByIdAndDelete(args.studentId)
            return 'Done'
        }
        catch (err) {
            console.log('Error deleting the session: ', err)
            return err
        }
    },
    deleteTeacher: async (args, req) => {
        try {
            if(!req.isAuth) {
                if(args.admin != null) {
                    req.userId = args.userId
                }
                else {
                    throw new Error('Unauthenticated')
                }
            }
            const teacherCourses = await Course.find({students: {$in: args.teacherId}})
            const teacherSessions = await Session.find({students: {$in: args.teacherId}})
            teacherCourses.map(async course => {
                await Course.findByIdAndUpdate(course, {teacher: null})
            })
            teacherSessions.map(async session => {
                await Session.findByIdAndUpdate(session, {teacher: null})
            })
            await Teacher.findByIdAndDelete(args.teacherId)
            return 'Done'
        }
        catch (err) {
            console.log('Error deleting the session: ', err)
            return err
        }
    }
}