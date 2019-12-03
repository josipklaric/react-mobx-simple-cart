import { observable, action, runInAction } from "mobx";
import axios from "axios";

export default class CoursesStore {

    @observable courses = [];
    @observable status = "";

    @action
    fetchCourses = async term => {

        this.status = "searching";
        this.term = term;
        this.images = [];
  
        try {
            var params = {
                client_id:"4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964",
                query: term
            };
            const response = await axios.get("https://api.unsplash.com/search/photos", { params: params});

            this.setCourses(response.data.results);
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