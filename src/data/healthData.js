import heartImg from '../assets/images/heart.png';
import lungsImg from '../assets/images/lungs.png';
import teethImg from '../assets/images/teeth.png';
import boneImg from '../assets/images/bone.png';

export const healthIndicators = [
    {
        title: 'Healthy Heart',
        status: 'Healthy',
        color: 'green',
        image: heartImg,
        progress: 80, 
    },
    {
        title: 'Lungs',
        status: 'Issue',
        color: 'red',
        image: lungsImg,
        progress: 40,
    },
    {
        title: 'Teeth',
        status: 'Healthy',
        color: 'green',
        image: teethImg,
        progress: 70,
    },
    {
        title: 'Bone',
        status: 'Healthy',
        color: 'green',
        image: boneImg,
        progress: 60,
    },
];

