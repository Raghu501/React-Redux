import React, { Component } from "react"
import CourseList from "./CourseList"
import { connect } from "react-redux";
import propTypes from "prop-types";

import * as CourseActions from "../../redux/CourseActions"
import * as AuthorActions from "../../redux/AuthorActions"
import { bindActionCreators } from "redux";
import { Redirect } from "react-router";
class CoursesPage extends Component {

    // constructor(props) {
    //     super(props);
    //
    state = {
        isNavToAddCoursePAge: false
    }
    //    this.handleAdd = this.handleAdd.bind(this);
    //}


    handleAdd = () => {
        debugger
        this.setState({ isNavToAddCoursePAge: true });
    }

    componentDidMount() {

        console.log("ct")
        const { actions, courses, authors } = this.props;
        //console.log(actions.loadCourses);
        //debugger
        if (courses.length === 0) {
            actions.loadCourses().catch(e => {
                alert('Loading courses failed');
            });
        }
        if (authors.length === 0) {
            actions.loadAuthors().catch(e => {
                alert('Loading authors failed');
            });
        }
    }

    render() {
        //console.log(this.props.courses);
        if (this.state.isNavToAddCoursePAge) { return <Redirect to="/Course" /> }
        return (
            <>

                {/* <button onClick={this.setState({isNavToAddCoursePAge :true })}>Add</button> */}
                <div> <button onClick={this.handleAdd} >ADD</button></div>
                < CourseList courses={this.props.courses} >
                </CourseList >
            </>
        )
    }
}
CoursesPage.propTypes = {
    //createCourse: propTypes.func.isRequired,
    courses: propTypes.array.isRequired,
    authors: propTypes.array.isRequired,
    actions: propTypes.object.isRequired
};

function mapStateToProps(state) {
    console.log("msp")
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
    console.log("msd")
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        //actions: bindActionCreators({ CourseActions, AuthorActions }, dispatch)
        actions: {
            loadCourses: bindActionCreators(CourseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(AuthorActions.loadAuthors, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);