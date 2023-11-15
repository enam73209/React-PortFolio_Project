import axios from "axios";

//TeamPage API Call
const TeamURL ='/team.json'
export const TeamDataRequest=async ()=>{
    try{
        let res =await axios.get(TeamURL);
        return  res.data['data'];
    }catch (e) {
        return e.toString();
    }
}
//ServicePage API Call
const ServiceURL = '/services.json';

export const ServiceDataRequest = async()=>{
    try{
        let res = await axios.get(ServiceURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}


//ProjectPage API Call
const ProjectURL = '/projects.json';
export const ProjectDataRequest= async ()=>{
    try {
        let res =await axios.get(ProjectURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}

//TestimonialPage API Call
const TestimonialURL = '/testimonial.json';
export const TestimonialDataRequest=async ()=>{
    try {
        let res = await axios.get(TestimonialURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}

/*-----------------HomePage API Call*--------------------*/
//WorkList API Call
const WorkURL = '/works.json';
export const WorksDataRequest = async ()=>{
    try {
        let res = await axios.get(WorkURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}

//StatList API Call
const StatURL = '/stat.json'
export const StatDataRequest = async ()=>{
    try {
        let res = await axios.get(StatURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}

//HeroList API Call
const HeroURL='/Banner_Partner.json';
export const HeroDataRequest = async ()=>{
    try{
        let res = await axios.get(HeroURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}