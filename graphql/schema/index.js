const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    
    type Participant {
        _id: ID!
        name: String!
        email: String!
        password: String
        dateJoined: String!
    }

    type Admin {
        _id: ID!
        name: String!
        email: String!
        password: String
        dateJoined: String!
        actions: [Action!]
    }
    
    type Trainer {
        _id: ID!
        name: String!
        email: String!
        password: String
        dateJoined: String
    }
    
    type Organization {
        _id: ID!
        name: String!
        email: String!
        password: String
        dateJoined: String
    }
    
    type Academy {
        _id: ID!
        name: String!
        email: String!
        states: [String!]!
        workshops: [Workshop!]
        status: String!
        dateCreated: String!
    }

    type Announcement {
        _id: ID!
        title: String!
        subHeading: String
        bold: String
        link: String
        body: String!
        author: Admin!
        images: [String!]
        status: String!
        dateCreated: String!
    }

    type Application {
        _id: ID!
        title: String!
        description: String!
        sender: String!
        status: String!
    }
    
    type Blog {
        _id: ID!
        title: String!
        subHeading: String
        description: String!
        bold: String
        body: String!
        author: Admin!
        links: [String!]
        images: [String!]
        status: String!
        dateCreated: String!
    }
    
    type Certificate {
        _id: ID!
        title: String!
        subHeading: String
        organization: Organization!
        workshop: Workshop!
        dates: String!
        dated: String!
        images: [String!]
    }

    type Course {
        _id: ID!
        name: String!
        description: String!
        blogs: [Blog!]
        trainers: [Trainer!]
        workshops: [Workshop!]
        dateCreated: String!
    }

    type Event {
        _id: ID!
        trainer: Trainer!
        workshop: Workshop!
        participants: [Participant!]
        date: String!
        report: Report
        dateCreated: String!
    }

    type Faq {
        _id: ID!
        title: String!
        question: String!
        answer: String!
        link: String
        author: Admin!
        status: String!
        dateCreated: String!
    }

    type Feedback {
        _id: ID!
        participant: Participant!
        workshop: Workshop!
        options: [FeedbackField!]
        answers: [String]
        trainer: Trainer
        status: String!
    }

    type Msg {
        _id: ID!
        title: String!
        by: String!
        message: String!
        status: String!
    }
    
    type Query {
        _id: ID!
        title: String!
        description: String
        authorInvolved: Author
        name: String!
        email: String!
        phone: String
        dateCreated: String!
        dateResolved: String
        status: String!
    }

    type Quicklink {
        _id: ID!
        title: String!
        subheading: String
        link: String!
        kind: String!
        dateCreated: String!
        status: String!
    }

    type Report {
        _id: ID!
        name: String!
        description: String!
        workshop: Workshop
        event: Event
        trainer: Trainer!
        participants: [Participant!]
        options: [ReportField!]
        answers: [String!]
        dates: String!
        attendances: [Attendance!]
        dateCreated: String!
    }

    type Workshop {
        _id: ID!
        name: String!
        description: String!
        trainers: [Trainer]
        participants: [Participant]
        dates: String!
        report: Report
        feedback: [Feedback!]
        certificates: [Certificate!]
        dateCreated: String!
    }

    type Action {
        _id: ID!
        admin: Admin!
        actionText: String!
        dateExecuted: String!
    }

    type Attendance {
        _id: ID!
        participant: Participant!
        trainer: Trainer!
        workshop: Workshop
        event: Event
        status: String!
    }

    input ParticipantInput {
        name: String!
        email: String!
        password: String!
    }

    input AdminInput {
        name: String!
        email: String!
        password: String!
    }

    input TrainerInput {
        name: String!
        email: String!
        password: String!
    }

    input OrganizationInput {
        name: String!
        email: String!
        password: String!
    }

    input CourseInput {
        name: String!
        description: String!
    }
    
    type AuthData {
        userId: ID!
        typeUser: String!
        token: String!
        tokenExpiration: Int!
    }

    type RootQuery {
        participant: Participant!
        participants: [Participant!]!
        participantById: Participant!
        admin: Admin!
        admins: [Admin!]!
        adminById: Admin!
        trainer: Trainer!
        trainers: [Trainer!]!
        trainerById: Trainer!
        organization: Organization!
        orgnizations: [Orgnization!]!
        orgnizationById: Orgnization!
        events: [Events!]
        eventById: Event!
        workshops: [Workshop!]
        workshopById: Workshop!
        announcements: [Announcement!]
        announcementById: Announcement!
        faqs: [FAQ!]
        faqById: FAQ!
        msgs: [Msg!]
        msgById: Msg!
        report: [Report!]
        reportById: Report!
        acadmies: [Academy!]
        academyById: Academy!
        certificates: [Certificate!]
        certificateById: Certificate!
        quicklinks: [Quicklink!]
        quicklinkById: Quicklink!
        queries: [Query!]
        queryById: Query!
        courses: [Course!]
        courseById: Course!
        blogs: [Blog!]
        blogById: Blog!
        applications: [Application!]
        applicationById: Application!
        feedbackFields: [FeedbackField!]
        feedbackFieldById: FeedbackField!
        reportFields: [ReportField!]
        reportFieldById: ReportField!
        attendances: [Attendance!]
        attendanceById: Attendance!
        trainerApplications: [Application!]
        organizationApplications: [Application!]
        trainerWorkshops: [Workshop!]
        organizationWorkshops: [Workshop!]
        participantWorkshops: [Workshop!]
    }
    
    type RootMutation {

        loginParticipant(method: String!, password: String!): AuthData!
        loginAdmin(method: String!, password: String!): AuthData!
        loginTrainer(method: String!, password: String!): AuthData!
        loginOrganization(method: String!, password: String!): AuthData!

        createParticipant(participantInput: ParticipantInput!): AuthData!
        createAdmin(adminInput: AdminInput!): AuthData!
        createTrainer(trainerInput: TrainerInput!): AuthData!
        createOrganization(organizationInput: OrganizationInput!): AuthData!
        
        createCourse(courseInput: CourseInput): Course!
        
        markAttendance(token: String!): String!
        
        joinCourse(admin: String, userId: String, token: String!): Course!
        completeSession(sessionId: String!): Session!
        deleteCourse(courseId: String!, admin: String, userId: String): String!
        closeCourse(courseId: String): Course!
        completeCourse(name: String): Course!
        markAbsent(studentId: String!, sessionId: String): String!
        markPresent(studentId: String!, sessionId: String): String!
        sendRequest(sessionId: String!): Request!
        acceptRequest(requestId: String!): Request!
        rejectRequest(requestId: String!): Request!
        moveStudentBatch(studentId: String!, year: Int!, branch: String!, group: String!): String!
        moveTeacherCourse(oldTeacherId: String!, newTeacherId: String!, courseId: String!, admin: String, userId: String): String!
        deleteSession(sessionId: String!): String!
        deleteStudent(studentId: String!): String!
        deleteTeacher(teacherId: String!): String!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)