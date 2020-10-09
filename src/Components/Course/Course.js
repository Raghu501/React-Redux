import React, { Component } from "react"
import { connect } from "react-redux";
import propTypes from "prop-types";

import * as CourseActions from "../../redux/CourseActions"
import { bindActionCreators } from "redux";
class Course extends Component {
    componentDidMount() {
        alert(2)
        this.props.actions.loadCourses().catch(e => {
            alert('Loading courses failed');
        });
    }
    render() {
        //console.log(this.props.courses);
        return (

            <div>
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
    alert(1)
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(CourseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);