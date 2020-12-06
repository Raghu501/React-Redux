import React from "react"
import { Link } from "react-router-dom";


const CourseList = (props) => {
    // console.log("d", props.actions);
    return (
        <div>
            <div>listCourses</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {props.courses.map(c => {
                        return <tr key={c.slug}>
                            <td>
                                <Link to={"/Course/" + c.slug}>{c.title}</Link>
                            </td>
                            <td>{c.authorId}</td>
                            <td>{c.category}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default CourseList

