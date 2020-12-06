import React, { useState } from "react"
import { connect } from "react-redux";
import propTypes from "prop-types";
import { loadCourses } from "../../redux/CourseActions"
import { loadAuthors } from "../../redux/AuthorActions"
import { useEffect } from "react";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

function ManageCoursesPage({ courses, authors, loadAuthors, loadCourses, ...props }) {
    //array destructing
    let [course, setCourse] = useState({ ...props.course });
    useEffect(() => {

        console.log("c", course);
        console.log("authors", authors);
        if (courses.length === 0) {
            loadCourses();
            //.catch(e => {
            //  alert('Loading courses failed');
            //});
        }
        if (authors.length === 0) {
            loadAuthors();
            // alert(1)
            //const { courses, authors } = this.props;
            //        this.props.loadCourses1().catch(e => {
            //          alert('Loading courses failed');
            //    });

            //  this.props.loadAuthors1().catch(e => {
            //    alert('Loading authors failed');
            //});
        }
    }, []);

    function onSave() {


    }

    function onChange(evt) {
        //updaate local state
        debugger
        const { name, value } = evt;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }));
    }

    return (
        <CourseForm course={course} authors={authors} onSave={onSave}
            onChange={onChange}></CourseForm>
    )
}

ManageCoursesPage.propTypes = {
    courses: propTypes.array.isRequired,
    authors: propTypes.array.isRequired,
    loadCourses: propTypes.func.isRequired,
    loadAuthors: propTypes.func.isRequired,
    course: propTypes.object.isRequired
};

function mapStateToProps(state) {
    console.log("msp1", state.authors)
    return {
        courses: state.courses,
        authors: state.authors,
        course: newCourse
    }
}
//what actions we want to access in the component
function mapDispatchToProps(dispatch) {
    return {
        loadCourses: loadCourses,
        loadAuthors: loadAuthors,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);