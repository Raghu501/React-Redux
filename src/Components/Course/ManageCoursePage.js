import React, { Component } from "react"
//import CourseList from "./CourseList"
import { connect } from "react-redux";
import propTypes from "prop-types";

import { loadCourses } from "../../redux/CourseActions"
import { loadAuthors } from "../../redux/AuthorActions"
//import { bindActionCreators } from "redux";
class ManageCoursesPage extends Component {

    componentDidMount() {
        //const { courses, authors } = this.props;
        loadCourses().catch(e => {
            alert('Loading courses failed');
        });
        loadAuthors().catch(e => {
            alert('Loading authors failed');
        });
    }

    render() {
        //console.log(this.props.courses);
        return (
            <p>Manage Course</p>
        )
    }
}
ManageCoursesPage.propTypes = {
    //createCourse: propTypes.func.isRequired,
    courses: propTypes.array.isRequired,
    authors: propTypes.array.isRequired,
    //actions: propTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses:
            state.authors.length === 0 ? [] :
                state.courses.map(c => {

                    //console.log("a", state.authors.find(i => i.id === c.authorId).name)
                    return {
                        ...c,
                        authorId: state.authors.find(i => i.id === c.authorId).name
                    };
                }),
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {

    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        //actions: bindActionCreators({ CourseActions, AuthorActions }, dispatch)
        //actions: {
        // loadCourses: bindActionCreators(CourseActions.loadCourses, dispatch),
        //loadAuthors: bindActionCreators(AuthorActions.loadAuthors, dispatch)
        //}

        loadCourses: loadCourses,
        loadAuthors: loadAuthors,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);