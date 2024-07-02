
// product imgs
import pImg1 from "../../assets/images/products/img-1.png"
import pImg2 from "../../assets/images/products/img-2.png"
import pImg3 from "../../assets/images/products/img-3.png"
import pImg4 from "../../assets/images/products/img-4.png"
import pImg5 from "../../assets/images/products/img-5.png"
import pImg6 from "../../assets/images/products/img-6.png"
import pImg7 from "../../assets/images/products/img-7.png"
import pImg8 from "../../assets/images/products/img-8.png"
import pImg9 from "../../assets/images/products/img-9.png"
import pImg10 from "../../assets/images/products/img-10.png"
import pImg11 from "../../assets/images/products/img-11.png"
import pImg12 from "../../assets/images/products/img-12.png"

// avatar imgs
import avatar1 from "../../assets/images/users/32/avatar-1.jpg";
import avatar2 from "../../assets/images/users/32/avatar-2.jpg";
import avatar3 from "../../assets/images/users/32/avatar-3.jpg";
import avatar4 from "../../assets/images/users/32/avatar-4.jpg";
import avatar5 from "../../assets/images/users/32/avatar-5.jpg";
import avatar6 from "../../assets/images/users/32/avatar-6.jpg";
import avatar7 from "../../assets/images/users/32/avatar-7.jpg";
import avatar8 from "../../assets/images/users/32/avatar-8.jpg";
import avatar9 from "../../assets/images/users/32/avatar-9.jpg";
import avatar10 from "../../assets/images/users/32/avatar-10.jpg";
import userDummy from "../../assets/images/users/32/user-dummy-img.jpg";

// cmpany imgs
import cImg1 from "../../assets/images/companies/img-1.png";
import cImg2 from "../../assets/images/companies/img-2.png";
import cImg3 from "../../assets/images/companies/img-3.png";
import cImg4 from "../../assets/images/companies/img-4.png";
import cImg5 from "../../assets/images/companies/img-5.png";
import cImg6 from "../../assets/images/companies/img-6.png";
import cImg7 from "../../assets/images/companies/img-7.png";

const products = [
    {
        id: 1,
        img: pImg1,
        img_alt: "img-1.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "215.00",
        discount: "25%",
        orders: "06",
        ratings: "4.9",
        publish: "12 Oct, 2022"
    }, {
        id: 2,
        img: pImg2,
        img_alt: "img-2.png",
        title: "Like style travel black handbag",
        category: "Luggage",
        stock: "06",
        price: "160.00",
        discount: "0%",
        orders: "02",
        ratings: "4.3",
        publish: "06 Jan, 2023"
    }, {
        id: 3,
        img: pImg3,
        img_alt: "img-3.png",
        title: "Fossil Gen 5E Smart Watch",
        category: "Watches",
        stock: "19",
        price: "120.00",
        discount: "42%",
        orders: "21",
        ratings: "4.3",
        publish: "26 Mar, 2021"
    }, {
        id: 4,
        img: pImg4,
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 5,
        img: pImg5,
        img_alt: "img-5.png",
        title: "Willage Volleyball Ball Size 4",
        category: "Sports",
        stock: "30",
        price: "99.00",
        discount: "10%",
        orders: "21",
        ratings: "4.0",
        publish: "30 Mar, 2021"
    }, {
        id: 6,
        img: pImg6,
        img_alt: "img-6.png",
        title: "Blive Printed Men Round Neck",
        category: "Fashion",
        stock: "35",
        price: "250.00",
        discount: "0%",
        orders: "02",
        ratings: "3.8",
        publish: "12 Oct, 2021"
    }, {
        id: 7,
        img: pImg7,
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }, {
        id: 8,
        img: pImg8,
        img_alt: "img-8.png",
        title: "Full Sleeve Solid Men Sweatshirt/Hoody",
        category: "Fashion",
        stock: "20",
        price: "260.00",
        discount: "12%",
        orders: "20",
        ratings: "4.1",
        publish: "21 Jun, 2021"
    }, {
        id: 9,
        img: pImg10,
        img_alt: "img-10.png",
        title: "Men's Round Neck Half Sleeves Solid T-Shirt",
        category: "Fashion",
        stock: "21",
        price: "160.00",
        discount: "0%",
        orders: "08",
        ratings: "4.4",
        publish: "15 Jan, 2021"
    }, {
        id: 10,
        img: pImg9,
        img_alt: "img-9.png",
        title: "Flip-Flops and House Slippers",
        category: "Footwear",
        stock: "30",
        price: "150.00",
        discount: "0%",
        orders: "10",
        ratings: "4.2",
        publish: "06 Jan, 2023"
    }, {
        id: 11,
        img: pImg11,
        img_alt: "img-11.png",
        title: "Jeans blue men boxer",
        category: "Fashion",
        stock: "50",
        price: "97.99",
        discount: "25%",
        orders: "51",
        ratings: "3.9",
        publish: "12 Oct, 2021"
    }, {
        id: 12,
        img: pImg12,
        img_alt: "img-12.png",
        title: "MAG back to the future shoes",
        category: "Footwear",
        stock: "06",
        price: "274.99",
        discount: "0%",
        orders: "06",
        ratings: "4.2",
        publish: "06 Jan, 2021"
    }, {
        id: 13,
        img: pImg4,
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 14,
        img: pImg7,
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }
];

const customers = [
    {
        id: "1",
        img: avatar2,
        name: "Javon Pouros",
        email: "rashawn@steex.com",
        phone: "+(253) 12345 67890",
        create_date: "28 Feb, 2023",
        status: "Unactive"
    }, {
        id: "2",
        img: avatar3,
        name: "Willy Gulgowski",
        email: "gulgowski@steex.com",
        phone: "+(152) 32165 49873",
        create_date: "20 Feb, 2023",
        status: "Block"
    }, {
        id: "3",
        img: avatar4,
        name: "Verona Mosciski",
        email: "vmosciski@steex.com",
        phone: "+(231) 14562 32165",
        create_date: "16 Feb, 2023",
        status: "Active"
    }, {
        id: "4",
        img: avatar5,
        name: "Vinnie Huels",
        email: "vinnie@steex.com",
        phone: "+(44) 98765 32104",
        create_date: "23 Jan, 2023",
        status: "Active"
    }, {
        id: "5",
        img: avatar6,
        name: "Deondre Huel",
        email: "rashawn@steex.com",
        phone: "+(251) 25874 13690",
        create_date: "17 Jan, 2023",
        status: "Active"
    }, {
        id: "6",
        img: avatar7,
        name: "Nelson Schaden",
        email: "nelson@steex.com",
        phone: "+(92) 67890 12345",
        create_date: "02 Feb, 2023",
        status: "Unactive"
    }, {
        id: "7",
        img: avatar8,
        name: "Juanita Price",
        email: "juanitaprice@steex.com",
        phone: "+(62) 35791 15935",
        create_date: "29 Dec, 2022",
        status: "Block"
    }, {
        id: "8",
        img: avatar9,
        name: "Mac Gyver",
        email: "macGyver@steex.com",
        phone: "+(251) 15935 35795",
        create_date: "24 Dec, 2022",
        status: "Active"
    }, {
        id: "9",
        img: avatar10,
        name: "Zachary Stokes",
        email: "zacharystokes@steex.com",
        phone: "+(532) 35795 15935",
        create_date: "14 Dec, 2022",
        status: "Active"
    }, {
        id: "10",
        img: userDummy,
        name: "Sarai Schmidt",
        email: "sschmidt@steex.com",
        phone: "+(120) 15935 32165",
        create_date: "08 Dec, 2022",
        status: "Block"
    }, {
        id: "11",
        img: avatar1,
        name: "Ubaldo Bartell",
        email: "ubaldobartell@steex.com",
        phone: "+(105) 93521 23165",
        create_date: "01 Dec, 2022",
        status: "Unactive"
    }, {
        id: "12",
        img: avatar2,
        name: "Soledad Vandervort",
        email: "vandervort@steex.com",
        phone: "+(210) 95162 15935",
        create_date: "24 Nov, 2022",
        status: "Active"
    }, {
        id: "13",
        img: avatar3,
        name: "Marcelino Smith",
        email: "marcelino@steex.com",
        phone: "+(512) 34682 17935",
        create_date: "21 Nov, 2022",
        status: "Active"
    }
];

const orders = [
    {
        id: "1",
        order_date: "22 Feb, 2023",
        delivery_date: "02 Mar, 2023",
        product: "Cotton collar tshirts for men",
        customer: "Deondre Fahey",
        img: cImg6,
        name: "Ratke Group",
        pay_method: "COD",
        price: "$109.00",
        ratings: "-",
        delivery_status: "New"
    }, {
        id: "2",
        order_date: "14 Feb, 2023",
        delivery_date: "27 Feb, 2023",
        product: "Like style travel black handbag",
        customer: "Warren Anderson",
        img: cImg1,
        name: "Zibra Fashion",
        pay_method: "Mastercard",
        price: "$149.00",
        ratings: "4.5",
        delivery_status: "Pending"
    }, {
        id: "3",
        order_date: "30 Jan, 2023",
        delivery_date: "10 Feb, 2023",
        product: "Fossil gen 5E smart watch",
        customer: "Dianna Bogan",
        img: cImg2,
        name: "Brand Infosys",
        pay_method: "Visa",
        price: "$215.00",
        ratings: "4.9",
        delivery_status: "Out of Delivered"
    }, {
        id: "4",
        order_date: "25 Jan, 2023",
        delivery_date: "03 Feb, 2023",
        product: "Super bass blutooth wireless headphone",
        customer: "Josefa Weissnat",
        img: cImg3,
        name: "Brand Infosys",
        pay_method: "Mastercard",
        price: "$199.00",
        ratings: "4.3",
        delivery_status: "Shipping"
    }, {
        id: "5",
        order_date: "19 Jan, 2023",
        delivery_date: "27 Jan, 2023",
        product: "Willage volleyball ball size 4",
        customer: "Ophelia Steuber",
        img: cImg4,
        name: "Themesbrand",
        pay_method: "COD",
        price: "$330.00",
        ratings: "4.7",
        delivery_status: "Delivered"
    }, {
        id: "6",
        order_date: "16 Jan, 2023",
        delivery_date: "19 Jan, 2023",
        product: "Branded T-Shirts",
        customer: "Federico Hand",
        img: cImg5,
        name: "Zibra Fashion",
        pay_method: "Visa",
        price: "$745.11",
        ratings: "4.6",
        delivery_status: "Pending"
    }, {
        id: "7",
        order_date: "01 Jan, 2023",
        delivery_date: "11 Jan, 2023",
        product: "Flip-Flops and house slippers",
        customer: "Uriel King",
        img: cImg1,
        name: "Zibra Fashion",
        pay_method: "Mastercard",
        price: "$99.99",
        ratings: "4.9",
        delivery_status: "New"
    }, {
        id: "8",
        order_date: "27 Dec, 2022",
        delivery_date: "02 Jan, 2023",
        product: "Flip-Flops and house slippers",
        customer: "Buck Roberts",
        img: cImg6,
        name: "Ratke Group",
        pay_method: "Mastercard",
        price: "$150.00",
        ratings: "4.6",
        delivery_status: "Pending"
    }, {
        id: "9",
        order_date: "22 Dec, 2022",
        delivery_date: "28 Dec, 2022",
        product: "Jeans blue men boxer",
        customer: "Axel Kozey",
        img: cImg4,
        name: "Themesbrand",
        pay_method: "Visa",
        price: "$136.14",
        ratings: "4.6",
        delivery_status: "Pending"
    }, {
        id: "10",
        order_date: "21 Dec, 2022",
        delivery_date: "29 Dec, 2022",
        product: "MAG back to the future shoes",
        customer: "Dallin Schowalter",
        img: cImg3,
        name: "Brand Infosys",
        pay_method: "COD",
        price: "$179.99",
        ratings: "4.7",
        delivery_status: "Delivered"
    }, {
        id: "11",
        order_date: "25 Jan, 2023",
        delivery_date: "03 Feb, 2023",
        product: "Super bass blutooth wireless headphone",
        customer: "Josefa Weissnat",
        img: cImg3,
        name: "Brand Infosys",
        pay_method: "Mastercard",
        price: "$199.00",
        ratings: "4.3",
        delivery_status: "Shipping"
    }, {
        id: "12",
        order_date: "01 Jan, 2023",
        delivery_date: "11 Jan, 2023",
        product: "Flip-Flops and house slippers",
        customer: "Uriel King",
        img: cImg1,
        name: "Zibra Fashion",
        pay_method: "Mastercard",
        price: "$99.99",
        ratings: "4.9",
        delivery_status: "New"
    }
];

const sellerOverview = [
    {
        id: 1,
        img: pImg1,
        img_alt: "img-1.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "$215.00",
        discount: "25%",
        orders: "06",
        ratings: "4.9",
        publish: "12 Oct, 2022"
    }, {
        id: 2,
        img: pImg2,
        img_alt: "img-2.png",
        title: "Like style travel black handbag",
        category: "Luggage",
        stock: "06",
        price: "$160.00",
        discount: "0%",
        orders: "02",
        ratings: "4.3",
        publish: "06 Jan, 2023"
    }, {
        id: 3,
        img: pImg3,
        img_alt: "img-3.png",
        title: "Fossil Gen 5E Smart Watch",
        category: "Watches",
        stock: "19",
        price: "$120.00",
        discount: "42%",
        orders: "21",
        ratings: "4.3",
        publish: "26 Mar, 2021"
    }, {
        id: 4,
        img: pImg4,
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "$180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 5,
        img: pImg5,
        img_alt: "img-5.png",
        title: "Willage Volleyball Ball Size 4",
        category: "Sports",
        stock: "30",
        price: "$99.00",
        discount: "10%",
        orders: "21",
        ratings: "4.0",
        publish: "30 Mar, 2021"
    }, {
        id: 6,
        img: pImg6,
        img_alt: "img-6.png",
        title: "Blive Printed Men Round Neck",
        category: "Fashion",
        stock: "35",
        price: "$250.00",
        discount: "0%",
        orders: "02",
        ratings: "3.8",
        publish: "12 Oct, 2021"
    }, {
        id: 7,
        img: pImg7,
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "$180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }, {
        id: 8,
        img: pImg8,
        img_alt: "img-8.png",
        title: "Full Sleeve Solid Men Sweatshirt/Hoody",
        category: "Fashion",
        stock: "20",
        price: "$260.00",
        discount: "12%",
        orders: "20",
        ratings: "4.1",
        publish: "21 Jun, 2021"
    }, {
        id: 9,
        img: pImg10,
        img_alt: "img-10.png",
        title: "Men's Round Neck Half Sleeves Solid T-Shirt",
        category: "Fashion",
        stock: "21",
        price: "$160.00",
        discount: "0%",
        orders: "08",
        ratings: "4.4",
        publish: "15 Jan, 2021"
    }, {
        id: 10,
        img: pImg9,
        img_alt: "img-9.png",
        title: "Flip-Flops and House Slippers",
        category: "Footwear",
        stock: "30",
        price: "$150.00",
        discount: "0%",
        orders: "10",
        ratings: "4.2",
        publish: "06 Jan, 2023"
    }, {
        id: 11,
        img: pImg11,
        img_alt: "img-11.png",
        title: "Jeans blue men boxer",
        category: "Fashion",
        stock: "50",
        price: "$97.99",
        discount: "25%",
        orders: "51",
        ratings: "3.9",
        publish: "12 Oct, 2021"
    }, {
        id: 12,
        img: pImg12,
        img_alt: "img-12.png",
        title: "MAG back to the future shoes",
        category: "Footwear",
        stock: "06",
        price: "$274.99",
        discount: "0%",
        orders: "06",
        ratings: "4.2",
        publish: "06 Jan, 2021"
    }, {
        id: 13,
        img: pImg4,
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "$180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 14,
        img: pImg7,
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "$180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }
];

const sellers = [
    {
        id: 1,
        img: cImg7,
        img_alt: "img-7.png",
        name: "Pich Hub",
        seller: "Lenna Labadie",
        email: "lennalabadie@dayrep.com",
        phone: "+(253) 12345 67890",
        stock: "451",
        revenue: "$253.32",
        chartColor: ["#ff6c6c"],
        series: [{
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        }]
    }, {
        id: 2,
        img: cImg5,
        img_alt: "img-5.png",
        name: "Jorce Medicines",
        seller: "Dallin Schowalter",
        email: "dallinschowalter@rhyta.com",
        phone: "+(152) 32165 49873",
        stock: "1163",
        revenue: "$992.14",
        chartColor: ["#2dcb73"],
        series: [{
            data: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89],
        }]
    }, {
        id: 3,

        img: cImg2,
        img_alt: "img-2.png",
        name: "Rotic Fashion",
        seller: "Alvina Smitham",
        email: "alvinasmitham@dayrep.com",
        phone: "+(231) 14562 32165",
        stock: "1023",
        revenue: "$954.08",
        chartColor: ["#2dcb73"],
        series: [{
            data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64],
        }]
    }, {
        id: 4,

        img: cImg6,
        img_alt: "img-6.png",
        name: "Terry & Jerry",
        seller: "Dallin Schowalter",
        email: "dallinschowalter@jourrapide.com",
        phone: "+(44) 98765 32104",
        stock: "357",
        revenue: "$346.35",
        chartColor: ["#2dcb73"],
        series: [{
            data: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50],
        }]
    }, {
        id: 5,

        img: cImg3,
        img_alt: "img-3.png",
        name: "Themesbrand",
        seller: "Kenyon Nienow",
        email: "kenyonnienow@dayrep.com",
        phone: "+(251) 25874 13690",
        stock: "841",
        revenue: "$654.78",
        chartColor: ["#ff6c6c"],
        series: [{
            data: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16],
        }]
    }, {
        id: 6,

        img: cImg2,
        img_alt: "img-2.png",
        name: "Brand Infosys",
        seller: "Alexandrea Jacobi",
        email: "alexandreajacobi@jourrapide.com",
        phone: "+(92) 67890 12345",
        stock: "395",
        revenue: "$153.84",
        chartColor: ["#2dcb73"],
        series: [{
            data: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49],
        }]
    }, {
        id: 7,

        img: cImg7,
        img_alt: "img-7.png",
        name: "Pich Fashion",
        seller: "Jaylon McClure",
        email: "jaylonmcclure@armyspy.com",
        phone: "+(62) 35791 15935",
        stock: "792",
        revenue: "$357.44",
        chartColor: ["#2dcb73"],
        series: [{
            data: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35],
        }]
    }, {
        id: 8,

        img: cImg1,
        img_alt: "img-1.png",
        name: "Zibra Fashion",
        seller: "Lenna Labadie",
        email: "lennalabadie@dayrep.com",
        phone: "+(120) 15935 32165",
        stock: "451",
        revenue: "$253.32",
        chartColor: ["#ff6c6c"],
        series: [{
            data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54],
        }]
    }
];

const productsGrid = [
    {
        id: 1,
        img: pImg1,
        img_alt: "img-1.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "215.00",
        discount: "25%",
        orders: "06",
        ratings: "4.9",
        publish: "12 Oct, 2022"
    }, {
        id: 2,
        img: pImg2,
        img_alt: "img-2.png",
        title: "Like style travel black handbag",
        category: "Luggage",
        stock: "06",
        price: "160.00",
        discount: "0%",
        orders: "02",
        ratings: "4.3",
        publish: "06 Jan, 2023"
    }, {
        id: 3,
        img: pImg3,
        img_alt: "img-3.png",
        title: "Fossil Gen 5E Smart Watch",
        category: "Watches",
        stock: "19",
        price: "120.00",
        discount: "42%",
        orders: "21",
        ratings: "4.3",
        publish: "26 Mar, 2021"
    }, {
        id: 4,
        img: pImg4,
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 5,
        img: pImg5,
        img_alt: "img-5.png",
        title: "Willage Volleyball Ball Size 4",
        category: "Sports",
        stock: "30",
        price: "99.00",
        discount: "10%",
        orders: "21",
        ratings: "4.0",
        publish: "30 Mar, 2021"
    }, {
        id: 6,
        img: pImg6,
        img_alt: "img-6.png",
        title: "Blive Printed Men Round Neck",
        category: "Fashion",
        stock: "35",
        price: "250.00",
        discount: "0%",
        orders: "02",
        ratings: "3.8",
        publish: "12 Oct, 2021"
    }, {
        id: 7,
        img: pImg7,
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }, {
        id: 8,
        img: pImg8,
        img_alt: "img-8.png",
        title: "Full Sleeve Solid Men Sweatshirt/Hoody",
        category: "Fashion",
        stock: "20",
        price: "260.00",
        discount: "12%",
        orders: "20",
        ratings: "4.1",
        publish: "21 Jun, 2021"
    }, {
        id: 9,
        img: pImg10,
        img_alt: "img-10.png",
        title: "Men's Round Neck Half Sleeves Solid T-Shirt",
        category: "Fashion",
        stock: "21",
        price: "160.00",
        discount: "0%",
        orders: "08",
        ratings: "4.4",
        publish: "15 Jan, 2021"
    }, {
        id: 10,
        img: pImg9,
        img_alt: "img-9.png",
        title: "Flip-Flops and House Slippers",
        category: "Footwear",
        stock: "30",
        price: "150.00",
        discount: "0%",
        orders: "10",
        ratings: "4.2",
        publish: "06 Jan, 2023"
    }, {
        id: 11,
        img: pImg11,
        img_alt: "img-11.png",
        title: "Jeans blue men boxer",
        category: "Fashion",
        stock: "50",
        price: "97.99",
        discount: "25%",
        orders: "51",
        ratings: "3.9",
        publish: "12 Oct, 2021"
    }, {
        id: 12,
        img: pImg12,
        img_alt: "img-12.png",
        title: "MAG back to the future shoes",
        category: "Footwear",
        stock: "06",
        price: "274.99",
        discount: "0%",
        orders: "06",
        ratings: "4.2",
        publish: "06 Jan, 2021"
    }, {
        id: 13,
        img: pImg4,
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 14,
        img: pImg7,
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }
];

const reviews = [
    {
        id: 1,
        rating: 4.5,
        name: "Jansh Brown",
        date: "08 Mar, 2023",
        title: 'Product Quality',
        decs: 'This is an incredible framework worth so much in the right hands! Nowhere else are you going to get so much flexibility and great code for a few dollars. Highly recommend purchasing today! Like right now! "',
        img: [
            { id: 1, priview: pImg1, formattedSize: "7.87 KB", path: "img-1.png", size: '6000' },
            { id: 2, priview: pImg6, formattedSize: "5.87 KB", path: "img-6.png", size: '3000' },
            { id: 3, priview: pImg7, formattedSize: "7.00 KB", path: "img-7.png", size: '6800' },
        ]
    },
    {
        id: 2,
        rating: 4.0,
        name: "Camilla Harber",
        date: "03 Mar, 2023",
        title: 'Product Quality',
        decs: " We have used your other templates as well and seems it's amazing with the design and code quality. Wish you best for the future updates. Keep updated you will be #1 in near future. ",
    },
    {
        id: 3,
        rating: 5.0,
        name: "Kaylin Bechtelar",
        date: "28 Feb, 2023",
        title: 'Design Quality',
        decs: " This template is incredibly comprehensive considering how new and modern it is! I bought 8 different admin templates recently and all of them had some good features, but were always missing stuff that you only realise after purchase. I've migrated my site to this template and have yet to find anything missing or lacking! Plus, the online documentation is really easy to use and access and very comprehensive! Well done guys and thank you! ",
    },
    {
        id: 4,
        rating: 3.5,
        name: "Dedrick Shields",
        date: "24 Feb, 2023",
        title: 'Feature Availability',
        decs: " Hello everyone, I would like to suggest here two contents that you could create. Course pages and blog pages. In them you could insert the listing and management of courses and listing and management of blog. The theme is perfect, one of the best purchases I've ever made. ",
    },
];


export { products, customers, orders, sellerOverview, sellers, productsGrid, reviews }; 