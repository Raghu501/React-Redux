import React, { Component } from "react"
import CourseList from "./CourseList"
import { connect } from "react-redux";
import propTypes from "prop-types";

import * as CourseActions from "../../redux/CourseActions"
import * as AuthorActions from "../../redux/AuthorActions"
import { bindActionCreators } from "redux";
class Course extends Component {
    componentDidMount() {

        this.props.actions.loadCourses().catch(e => {
            alert('Loading courses failed');
        });

        this.props.actions.loadAuthors().catch(e => {
            alert('Loading authors failed');
        });
    }
    render() {
        //console.log(this.props.courses);
        return (
            <CourseList courses={this.props.courses} >
            </CourseList>
        )
    }
}
Course.propTypes = {
    //createCourse: propTypes.func.isRequired,
    courses: propTypes.array.isRequired,
    authors: propTypes.array.isRequired,
    actions: propTypes.object.isRequired
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
        actions: {
            loadCourses: bindActionCreators(CourseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(AuthorActions.loadAuthors, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);