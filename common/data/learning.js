// Courses

import react from "../../assets/images/learning/react.png";
import flask from "../../assets/images/learning/flask.png";
import shopify from "../../assets/images/learning/shopify.png";
import tailwindcss from "../../assets/images/learning/tailwindcss.png";
import core from "../../assets/images/learning/core.png";
import laravel from "../../assets/images/learning/laravel.png";
import mysql from "../../assets/images/learning/mysql.png";
import sketch from "../../assets/images/learning/sketch.png";
import symfony from "../../assets/images/learning/symfony.png";
import webpack from "../../assets/images/learning/webpack.png";

// brands
import firefox from "../../assets/images/brands/firefox.png";
import microsoft from "../../assets/images/brands/microsoft.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import cloud_computing from "../../assets/images/brands/cloud-computing.png";
import chrome from "../../assets/images/brands/chrome.png";

// avatar imgs
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";


const coursesCategory = [
    {
        id: 1,
        logoImg: react,
        title: "React Development",
        courses: 250,
        backgroundColor: "info-subtle"
    },
    {
        id: 2,
        logoImg: flask,
        title: "Flask Development",
        courses: 120,
        backgroundColor: "dark-subtle"
    }, {
        id: 3,
        logoImg: shopify,
        title: "Shopify Development",
        courses: 65,
        backgroundColor: "success-subtle"
    }, {
        id: 4,
        logoImg: firefox,
        title: "Marketing & Management",
        courses: 50,
        backgroundColor: "danger-subtle"
    }, {
        id: 5,
        logoImg: tailwindcss,
        title: "Web Design",
        courses: 345,
        backgroundColor: "info-subtle"
    }, {
        id: 6,
        logoImg: core,
        title: "ASP.NET Development",
        courses: 69,
        backgroundColor: "primary-subtle"
    }, {
        id: 7,
        logoImg: laravel,
        title: "Laravel Development",
        courses: 250,
        backgroundColor: "danger-subtle"
    }, {
        id: 8,
        logoImg: mysql,
        title: "PHP Development",
        courses: 25,
        backgroundColor: "primary-subtle"
    }, {
        id: 9,
        logoImg: sketch,
        title: "Graphic Design",
        courses: 25,
        backgroundColor: "warning-subtle"
    }, {
        id: 10,
        logoImg: symfony,
        title: "Business & Consulting",
        courses: 90,
        backgroundColor: "dark-subtle"
    }, {
        id: 11,
        logoImg: webpack,
        title: "Digital Marketing",
        courses: 75,
        backgroundColor: "info-subtle"
    }, {
        id: 12,
        logoImg: microsoft,
        title: "Data Science",
        courses: 69,
        backgroundColor: "success-subtle"
    }, {
        id: 13,
        logoImg: dribbble,
        title: "Writing & Reading",
        courses: 25,
        backgroundColor: "danger-subtle"
    }, {
        id: 14,
        logoImg: cloud_computing,
        title: "Self Development",
        courses: 10,
        backgroundColor: "info-subtle"
    }, {
        id: 15,
        logoImg: chrome,
        title: "Computer Science",
        courses: 10,
        backgroundColor: "warning-subtle"
    },
];

const coursesGrid = [
    {
        id: 1,
        logoImg: react,
        badgeText: "Intermediate",
        backgroundColor: "bg-info-subtle",
        isBookmark: "",
        cardTitle: "Advanced React and Redux",
        course: "React Development",
        courseDuration: "6 Months",
        students: 256,
        lessons: 15,
        userImg: avatar2,
        username: "Themesbrand",
        fees: "$220.00",
        rating: "4.4",
        status: "Open"
    },
    {
        id: 2,
        logoImg: shopify,
        badgeText: "Beginner",
        backgroundColor: "bg-success-subtle",
        isBookmark: "active",
        cardTitle: "The Complete Shopify Dropship course",
        course: "Shopify Development",
        courseDuration: "1 Years",
        students: 120,
        lessons: 68,
        userImg: avatar3,
        username: "Ayaan Bowen",
        fees: "$99.99",
        rating: "4.9",
        status: "Open"
    },
    {
        id: 3,
        logoImg: sketch,
        badgeText: "Advance",
        backgroundColor: "bg-warning-subtle",
        isBookmark: "active",
        cardTitle: "UI/UX Style Guide With Sketch",
        course: "Graphic Design",
        courseDuration: "7 Months",
        students: 120,
        lessons: 68,
        userImg: avatar6,
        username: "Zachary Stokes",
        fees: "$214.99",
        rating: "4.8",
        status: "Close"
    },
    {
        id: 4,
        logoImg: webpack,
        badgeText: "Intermediate",
        backgroundColor: "bg-primary-subtle",
        isBookmark: "",
        cardTitle: "Digital Marketing",
        course: "Marketing & Management",
        courseDuration: "2 Years",
        students: 146,
        lessons: 93,
        userImg: avatar4,
        username: "Nelson Schaden",
        fees: "$301.00",
        rating: "4.2",
        status: "Open"
    },
    {
        id: 5,
        logoImg: laravel,
        badgeText: "Advance",
        backgroundColor: "bg-danger-subtle",
        isBookmark: "active",
        cardTitle: "Master Laravel for Beginners & Intermediate",
        course: "Laravel Development",
        courseDuration: "1 Years",
        students: 84,
        lessons: 57,
        userImg: avatar9,
        username: "Ophelia Steuber",
        fees: "$674.00",
        rating: "4.6",
        status: "Open"
    },
    {
        id: 6,
        logoImg: flask,
        badgeText: "Beginner",
        backgroundColor: "bg-dark-subtle",
        isBookmark: "active",
        cardTitle: "REST APIs With Flask",
        course: "Flask Development",
        courseDuration: "3 Years",
        students: 364,
        lessons: 230,
        userImg: avatar1,
        username: "Sarai Schmidt",
        fees: "$539.99",
        rating: "4.7",
        status: "Close"
    },
    {
        id: 7,
        logoImg: core,
        badgeText: "Intermediate",
        backgroundColor: "bg-primary-subtle",
        isBookmark: "",
        cardTitle: "Asp.Net Core 7 True Ultimate Guide",
        course: "Asp.Net Development",
        courseDuration: "8 Years",
        students: 321,
        lessons: 49,
        userImg: avatar10,
        username: "Deondre Huel",
        fees: "$220.00",
        rating: "4.4",
        status: "Open"
    }, {
        id: 8,
        logoImg: tailwindcss,
        badgeText: "Beginner",
        backgroundColor: "bg-info-subtle",
        isBookmark: "active",
        cardTitle: "Tailwind CSS From Scratch",
        course: "Web Design",
        courseDuration: "8 Months",
        students: 362,
        lessons: 101,
        userImg: avatar8,
        username: "Nelson Schaden",
        fees: "$149.99",
        rating: "4.8",
        status: "Open"
    },
    {
        id: 9,
        logoImg: firefox,
        badgeText: "Advance",
        backgroundColor: "bg-danger-subtle",
        isBookmark: "active",
        cardTitle: "Conflict Management with Emotional Intelligence",
        course: "Marketing & Management",
        courseDuration: "1 Years",
        students: 159,
        lessons: 43,
        userImg: avatar7,
        username: "Prezy Mark",
        fees: "$321.99",
        rating: "4.9",
        status: "Active"
    }, {
        id: 10,
        logoImg: mysql,
        badgeText: "Intermediate",
        backgroundColor: "bg-info-subtle",
        isBookmark: "active",
        cardTitle: "Fundamentals of Database Engineering",
        course: "PHP Development",
        courseDuration: "9 Months",
        students: 320,
        lessons: 87,
        userImg: avatar5,
        username: "Domenic Dach",
        fees: "$193.00",
        rating: "4.7",
        status: "Close"
    },

];

const coursesList = [
    {
        id: 1,
        category: "Laravel Development",
        img: laravel,
        img_alt: "laravel.png",
        name: "Master Laravel for Beginners & Intermediate",
        instructor: "Ophelia Steuber",
        lessons: "57",
        duration: "1 Years",
        students: "84",
        fees: "$220.00",
        rating: "4.4",
        status: "Open"
    }, {
        id: 2,
        category: "PHP Development",
        img: mysql,
        img_alt: "mysql.png",
        name: "Fundamentals of Database Engineering",
        instructor: "Domenic Dach",
        lessons: "87",
        duration: "9 Months",
        students: "320",
        fees: "$99.99",
        rating: "4.9",
        status: "Open"
    }, {
        id: 3,
        category: "Marketing & Management",
        img: firefox,
        img_alt: "firefox.png",
        name: "Conflict Management with Emotional Intelligence",
        instructor: "Prezy Mark",
        lessons: "43",
        duration: "1 Years",
        students: "159",
        fees: "$214.99",
        rating: "4.8",
        status: "Close"
    }, {
        id: 4,
        category: "Web Design",
        img: tailwindcss,
        img_alt: "tailwindcss.png",
        name: "Tailwind CSS From Scratch",
        instructor: "Nelson Schaden",
        lessons: "101",
        duration: "8 Months",
        students: "362",
        fees: "$301.00",
        rating: "4.2",
        status: "Open"
    }, {
        id: 5,
        category: "Asp.Net Development",
        img: core,
        img_alt: "core.png",
        name: "Asp.Net Core 7 True Ultimate Guide",
        instructor: "Deondre Huel",
        lessons: "49",
        duration: "8 Years",
        students: "321",
        fees: "$674.00",
        rating: "4.6",
        status: "Open"
    }, {
        id: 6,
        category: "Flask Development",
        img: flask,
        img_alt: "flask.png",
        name: "REST APIs with Flask",
        instructor: "Sarai Schmidt",
        lessons: "230",
        duration: "3 Years",
        students: "364",
        fees: "$539.99",
        rating: "4.7",
        status: "Close"
    }, {
        id: 7,
        category: "Laravel Development",
        img: laravel,
        img_alt: "laravel.png",
        name: "Master Laravel for Beginners & Intermediate",
        instructor: "Ophelia Steuber",
        lessons: "57",
        duration: "1 Years",
        students: "84",
        fees: "$220.00",
        rating: "4.4",
        status: "Open"
    }, {
        id: 8,
        category: "Marketing & Management",
        img: webpack,
        img_alt: "webpack.png",
        name: "Digital Marketing",
        instructor: "Nelson Schaden",
        lessons: "93",
        duration: "2 Years",
        students: "146",
        fees: "$149.99",
        rating: "4.8",
        status: "Open"
    }, {
        id: 9,
        category: "Graphic Design",
        img: sketch,
        img_alt: "sketch.png",
        name: "UI/UX Styleguide With Sketch",
        instructor: "Zachary Stokes",
        lessons: "68",
        duration: "7 Months",
        students: "120",
        fees: "$321.99",
        rating: "4.9",
        status: "Open"
    }, {
        id: 10,
        category: "Shopify Development",
        img: shopify,
        img_alt: "shopify.png",
        name: "The Complete Shopify Dropship course",
        instructor: "Ayaan Bowen",
        lessons: "120",
        duration: "1 Years",
        students: "23",
        fees: "$193.00",
        rating: "4.7",
        status: "Close"
    }, {
        id: 11,
        category: "React Development",
        img: react,
        img_alt: "react.png",
        name: "Advanced React and Redux",
        instructor: "Themesbrand",
        lessons: "15",
        duration: "2 Years",
        students: "49",
        fees: "$278.12",
        rating: "4.5",
        status: "Open"
    }
];

// Instructors

const instructorGrid = [
    {
        id: 1,
        userImg: avatar2,
        username: "Ayaan Bowen",
        designation: "Shopify Development",
        email: "ayaanbowen@steex.com",
        experience: "9 Months",
        students: "320",
        phone: "+(152) 15963 24785",
        course: 134,
        rating: 4.5,
        status: "bg-success"

    }, {
        id: 2,
        userImg: avatar1,
        username: "Priscilla Takahashi",
        designation: "Project Manager",
        email: "priscilla@steex.com",
        experience: "1 Years",
        students: "159",
        phone: "+(122) 0397 3076",
        course: 160,
        rating: 4.8,
        status: "bg-success",
        checked: "defaultChecked"

    }, {
        id: 3,
        userImg: avatar3,
        username: "Martin Roth",
        designation: "Graphic Designer",
        email: "martinroth@steex.com",
        experience: "8 Months",
        students: "362",
        phone: "781 789 3874",
        course: 362,
        rating: 4.3,
        status: "bg-success"

    }, {
        id: 4,
        userImg: avatar4,
        username: "Jennifer Masten",
        designation: "React Development",
        email: "jennifermasten@steex.com",
        experience: "3 Years",
        students: "321",
        phone: "918 664 0738",
        course: 241,
        rating: 4.6,
        status: "bg-success"

    }, {
        id: 5,
        userImg: avatar5,
        username: "Hazel Gordon",
        designation: "Laravel Development",
        email: "hazelgordon@steex.com",
        experience: "5 Years",
        students: "364",
        phone: "617 398 3263",
        course: 237,
        rating: 4.8,
        status: "bg-danger"

    }, {
        id: 6,
        userImg: avatar8,
        username: "Michael Johnson",
        designation: "Flask Development",
        email: "michaeljohnson@steex.com",
        experience: "6 Years",
        students: "84",
        phone: "02261 95 80 88",
        course: 174,
        rating: 4.7,
        status: "bg-success"

    }, {
        id: 7,
        userImg: avatar6,
        username: "Angela Fryar",
        designation: "Web Designer",
        email: "angelafryar@steex.com",
        experience: "2 Years",
        students: "146",
        phone: "089 54 77 91",
        course: 99,
        rating: 4.9,
        status: "bg-success"

    }, {
        id: 8,
        userImg: avatar7,
        username: "Anthony Gardner",
        designation: "Marketing & Management",
        email: "ayaanbowen@steex.com",
        experience: "7 Months",
        students: "120",
        phone: "09404 91 69 16",
        course: 110,
        rating: 4.6,
        status: "bg-success"

    }, {
        id: 9,
        userImg: avatar9,
        username: "James Bradley",
        designation: "Marketing & Management",
        email: "jamesbradley@steex.com",
        experience: "1 Years",
        students: "79",
        phone: "040 67 58 18",
        course: 159,
        rating: 4.3,
        status: "bg-success",
        checked: "defaultChecked"

    },
    {
        id: 10,
        userImg: avatar10,
        username: "Brenda Cornett",
        designation: "Marketing & Management",
        email: "brendacornett@steex.com",
        experience: "2 Years",
        students: "49",
        phone: "03586 68 04 69",
        course: 176,
        rating: 4.3,
        status: "bg-success"

    },
    {
        id: 11,
        userImg: avatar10,
        username: "Brenda Cornett",
        designation: "Marketing & Management",
        email: "brendacornett@steex.com",
        experience: "5 Years",
        students: "364",
        phone: "03586 68 04 69",
        course: 176,
        rating: 4.3,
        status: "bg-success"

    },
];

const instructorsList = [
    {
        id: 1,
        img: avatar10,
        img_alt: "avatar-10.jpg",
        name: "Domenic Dach",
        total_course: "356",
        email: "domenic@steex.com",
        experience: "9 Months",
        students: "320",
        contact: "+(532) 01523 14587",
        rating: "4.9",
        status: "Active"
    }, {
        id: 2,
        img: avatar9,
        img_alt: "avatar-9.jpg",
        name: "Prezy Mark",
        total_course: "315",
        email: "prezy@steex.com",
        experience: "1 Years",
        students: "159",
        contact: "+(159) 65432 15987",
        rating: "4.8",
        status: "Unactive"
    }, {
        id: 3,
        img: avatar8,
        img_alt: "avatar-8.jpg",
        name: "Nelson Schaden",
        total_course: "852",
        email: "nelson@steex.com",
        experience: "8 Months",
        students: "362",
        contact: "+(251) 12365 47896",
        rating: "4.2",
        status: "Active"
    }, {
        id: 4,
        img: avatar7,
        img_alt: "avatar-7.jpg",
        name: "Deondre Huel",
        total_course: "485",
        email: "deondre@steex.com",
        experience: "3 Years",
        students: "321",
        contact: "+(025) 1592 15236",
        rating: "4.6",
        status: "Active"
    }, {
        id: 5,
        img: avatar6,
        img_alt: "avatar-6.jpg",
        name: "Sarai Schmidt",
        total_course: "320",
        email: "sarai@steex.com",
        experience: "5 Years",
        students: "364",
        contact: "+(123) 01592 36544",
        rating: "4.7",
        status: "Active"
    }, {
        id: 6,
        img: avatar5,
        img_alt: "avatar-5.jpg",
        name: "Ophelia Steuber",
        total_course: "485",
        email: "ophelia@steex.com",
        experience: "6 Years",
        students: "84",
        contact: "+(321) 01234 56987",
        rating: "4.4",
        status: "Unactive"
    }, {
        id: 7,
        img: avatar4,
        img_alt: "avatar-4.jpg",
        name: "Nelson Schaden",
        total_course: "258",
        email: "nelson@steex.com",
        experience: "2 Years",
        students: "146",
        contact: "+(159) 98745 63210",
        rating: "4.8",
        status: "Active"
    }, {
        id: 8,
        img: avatar3,
        img_alt: "avatar-3.jpg",
        name: "Zachary Stokes",
        total_course: "365",
        email: "zachary@steex.com",
        experience: "7 Months",
        students: "120",
        contact: "+(120) 12435 69870",
        rating: "4.9",
        status: "Active"
    }, {
        id: 9,
        img: avatar2,
        img_alt: "avatar-2.jpg",
        name: "Ayaan Bowen",
        total_course: "162",
        email: "ayaan@steex.com",
        experience: "1 Years",
        students: "79",
        contact: "+(152) 15963 24785",
        rating: "4.7",
        status: "Unactive"
    }, {
        id: 10,
        img: avatar1,
        img_alt: "avatar-1.jpg",
        name: "Themesbrand",
        total_course: "159",
        email: "themesbrand@steex.com",
        experience: "2 Years",
        students: "49",
        contact: "+(123) 15962 32145",
        rating: "4.9",
        status: "Active"
    }, {
        id: 11,
        img: avatar6,
        img_alt: "avatar-6.jpg",
        name: "Sarai Schmidt",
        total_course: "320",
        email: "sarai@steex.com",
        experience: "5 Years",
        students: "364",
        contact: "+(123) 01592 36544",
        rating: "4.7",
        status: "Active"
    }
];

// Students

const studentsSubscriptionList = [
    {
        id: 1,
        category: "Shopify Development",
        course: "The Complete Shopify Dropship course",
        logoImg: shopify,
        price: "$451.32",
        backgroundColor: "bg-success-subtle",
        duration: "6 Months",
        status: "Active",
        paymentDue: "2 Days ago",
        action: "Renew Now",
        students: '745',
        rating: '4.8',
        statustype: 'Live',
        textColor: "text-danger"
    },
    {
        id: 2,
        category: "Graphic Design",
        course: "UI/UX Style guide With Sketch",
        backgroundColor: "bg-warning-subtle",
        logoImg: sketch,
        price: "$239.99",
        duration: "9 Months",
        status: "Active",
        paymentDue: "23 March, 2023",
        action: "Pay Now",
        students: '654',
        rating: '4.3',
        statustype: 'Live',
        textColor: "text-muted"
    },
    {
        id: 3,
        category: "Laravel Development",
        backgroundColor: "bg-danger-subtle",
        course: "Master Laravel for Beginners & Intermediate",
        logoImg: laravel,
        price: "$159.27",
        duration: "1 Years",
        status: "Unactive",
        paymentDue: "15 June, 2022",
        action: "Pay Now",
        students: '321',
        rating: '4.9',
        statustype: 'Pending',
        textColor: "text-muted"
    },
    {
        id: 4,
        category: "Flask Development",
        backgroundColor: "bg-dark-subtle",
        course: "REST APIs With Flask",
        logoImg: flask,
        price: "$198.16",
        duration: "2 Years",
        status: "Active",
        paymentDue: "19 Feb, 2023",
        action: "Pay Now",
        students: '349',
        rating: '4.5',
        statustype: 'Cancel',
        textColor: "text-muted"
    },
    {
        id: 5,
        category: "Marketing & Management",
        course: "Conflict Management with Emotional Intelligence",
        backgroundColor: "bg-danger-subtle",
        logoImg: firefox,
        price: "$324.48",
        duration: "8 Months",
        status: "Unactive",
        paymentDue: "24 Jan, 2023",
        action: "Pay Now",
        students: '745',
        rating: '4.6',
        statustype: 'Live',
        textColor: "text-muted"
    },
];

export { coursesCategory, coursesGrid, coursesList, instructorGrid, instructorsList, studentsSubscriptionList };