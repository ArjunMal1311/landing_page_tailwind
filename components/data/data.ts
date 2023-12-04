import { MdEnhancedEncryption, MdLock, MdLockOpen, MdOutlineSecurityUpdateGood, MdSecurity, MdSecurityUpdate, MdShield, MdSystemSecurityUpdateWarning, MdVerifiedUser } from "react-icons/md";
import { PiAlignTopSimple } from 'react-icons/pi';
import { BsMenuButtonWideFill, BsShieldLock } from 'react-icons/bs';
import { FaReact, FaAngular, FaVuejs, FaBootstrap, FaNode, FaPython, FaHtml5, FaCss3, FaJs, FaSass, FaDocker, FaDAndD } from 'react-icons/fa';
import { CiChat1 } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";

export const features = [
    { icon: PiAlignTopSimple, text: 'Simplify your security' },
    { icon: BsMenuButtonWideFill, text: 'Customer Identity' },
    { icon: FaDAndD, text: 'Adaptable authentication' },
];

export const iconSets = [
    [MdSystemSecurityUpdateWarning, MdSecurityUpdate, MdOutlineSecurityUpdateGood],
    [MdEnhancedEncryption, MdVerifiedUser, MdSecurity],
    [MdLock, MdLockOpen, MdShield],
];

export const descriptions = [
    ['Error', 'Integrate', 'Success'],
    ['Enhance', 'Empower', 'Engage'],
    ['Lock', 'Unlock', 'Shield'],
];

export const iconNames = [
    FaReact, FaAngular, FaVuejs, FaBootstrap, FaNode, FaPython, FaHtml5, FaCss3, FaJs, FaSass, FaDocker
];

export const featureCardsData = [
    {
        "title": "Anonymous User",
        "description": "Incorporate rich user profiling, and facilitate more transactions."
    },
    {
        "title": "Enhanced Security",
        "description": "Ensure the highest level of security with our advanced encryption methods."
    },
    {
        "title": "Data Analytics",
        "description": "Utilize powerful analytics tools to gain insights and make informed decisions."
    },
    {
        "title": "Real-time Monitoring",
        "description": "Monitor your system in real-time to detect and respond to issues instantly."
    },
    {
        "title": "User-friendly Interface",
        "description": "Enjoy a seamless experience with our intuitive and user-friendly interface."
    },
    {
        "title": "Customization Options",
        "description": "Tailor the platform to your needs with customizable features and settings."
    },
    {
        "title": "Scalability",
        "description": "Easily scale your operations as your business grows with our scalable solutions."
    },
    {
        "title": "Collaborative Tools",
        "description": "Enhance collaboration among your team members with integrated collaborative tools."
    },
    {
        "title": "Automated Workflows",
        "description": "Streamline processes and boost efficiency with automated workflows."
    },
    {
        "title": "Mobile Accessibility",
        "description": "Access your platform on the go with mobile-friendly interfaces and apps."
    }
];

export const sections = [
    {
        title: 'API Authorization',
        items: [
            { title: 'Discussions', description: 'Login box must find the right balance for user convenience, privacy, and security.' },
            { title: 'Permissions', description: 'Manage and customize user permissions with our flexible API authorization system.' },
            { title: 'Authentication', description: 'Secure your application with robust authentication mechanisms and protocols.' },
        ],
        icon: CiChat1,
    },
    {
        title: 'User Management',
        items: [
            { title: 'Profile Settings', description: 'Allow users to customize their profiles and settings effortlessly.' },
            { title: 'Account Security', description: 'Implement advanced security features to protect user accounts from unauthorized access.' },
            { title: 'Activity Tracking', description: 'Track user activities for improved analytics and insights.' },
        ],
        icon: BsShieldLock,
    },
    {
        title: 'Data Analytics',
        items: [
            { title: 'Data Visualization', description: 'Create insightful visualizations to understand your data better.' },
            { title: 'Analytics Dashboard', description: 'Access a comprehensive analytics dashboard for real-time data monitoring.' },
            { title: 'Reporting Tools', description: 'Generate detailed reports to gain actionable insights from your data.' },
        ],
        icon: FiBarChart2,
    },
];

export const columns = [
    {
        title: 'About Us',
        items: ['Our Story', 'Mission & Vision', 'Team', 'Values', 'Contact Us'],
    },
    {
        title: 'Services',
        items: ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Consulting'],
    },
    {
        title: 'Resources',
        items: ['Blog', 'Whitepapers', 'Case Studies', 'FAQs', 'Support'],
    },
    {
        title: 'Connect',
        items: ['Newsletter', 'Community', 'Events', 'Careers', 'Partnerships'],
    },
];
