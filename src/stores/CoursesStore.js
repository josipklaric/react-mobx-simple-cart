import { observable, action, runInAction } from "mobx";
import axios from "axios";
import { getCourses } from "../apicalls";

export default class CoursesStore {

    @observable courses = [];
    @observable status = "";
    @observable filter = {};

    @action
    fetchCourses = async filter => {

        this.status = "searching";
        this.filter = filter;
        this.images = [];
  
        try {
            //var params = { filter: filter };
            const response = await axios.get('http://localhost:4000/courses/');
            //console.log('>> fetchCourses -> response.data', response.data);
            //const response = await getCourses();
            this.setCourses(response.data);
        } 
        catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    @action
    setCourses = (courses) => {
        this.courses = courses;
        this.status = "ok";
    }
}