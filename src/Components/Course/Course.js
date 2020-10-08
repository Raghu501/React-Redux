import React, { Component } from "react"
import { connect } from "react-redux";
import propTypes from "prop-types";

import * as CourseActions from "../../redux/CourseActions"
import { bindActionCreators } from "redux";
class Course extends Component {

    state = {
        course: {
            "title": ""
        }
    }

    handleChange = (evt) => {
        // console.log(...this.state.course)
        //copy state
        const course = { ...this.state.course, title: evt.target.value }
        console.log("p", course);
        //debugger
        this.setState({
            course
        })
        // console.log("c",this.state.course)
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        //update the store
        //method-1
        //  this.props.dispatch(createCourse(this.state.course))
        //method-2
        //this.props.createCourse(this.state.course)
        //method-3
        this.props.actions.createCourse(this.state.course);
    }

    render() {
        //console.log(this.props.courses);
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}
                        value={this.state.course.title}
                    ></input>
                    <input type="submit" value="Save"></input>
                </form>
                <div>listCourses</div>



                {this.props.courses.map(c => {

                    return <div key={c.title}>{c.title}</div>
                })}


            </div >
        );

    }
}
Course.propTypes = {
    //createCourse: propTypes.func.isRequired,
    courses: propTypes.array.isRequired,
    actions: propTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(CourseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);