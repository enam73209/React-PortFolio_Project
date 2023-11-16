import axios from "axios";

//TeamPage API Call
const TeamURL ='/database/team.json'
export const TeamDataRequest=async ()=>{
    try{
        let res =await axios.get(TeamURL);
        return  res.data['data'];
    }catch (e) {
        return e.toString();
    }
}
//ServicePage API Call
const ServiceURL = '/database/services.json';

export const ServiceDataRequest = async()=>{
    try{
        let res = await axios.get(ServiceURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}


//ProjectPage API Call
const ProjectURL = '/database/projects.json';
export const ProjectDataRequest= async ()=>{
    try {
        let res =await axios.get(ProjectURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}

//TestimonialPage API Call
const TestimonialURL = '/database/testimonial.json';
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
const WorkURL = '/database/works.json';
export const WorksDataRequest = async ()=>{
    try {
        let res = await axios.get(WorkURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}

//StatList API Call
const StatURL = '/database/stat.json'
export const StatDataRequest = async ()=>{
    try {
        let res = await axios.get(StatURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}

//HeroList API Call
const HeroURL='/database/Banner_Partner.json';
export const HeroDataRequest = async ()=>{
    try{
        let res = await axios.get(HeroURL);
        return await res.data['data'];
    }catch (e) {
        return e.toString();
    }
}