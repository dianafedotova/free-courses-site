import React from 'react';
import Button from '@material-ui/core/Button';



class CourseItem extends React.Component {
    render(){
        const {
            data: {title, url, number, cost, language, theme, comments}
        } = this.props
        
        return(
            <div>
            <h5 className="course-title">{title}</h5>
            <div className="course-description">
            <p className="course-number">Количество курсов: {number}</p>
            <p className="course-language">Язык: {language}</p>
            <p className="course-theme">Тематика: {theme}</p>
            </div>
            <p className="course-cost">{cost}</p>
            <p className="course-comment">{comments}</p>
            <Button className="start-learning-btn" variant="contained" color="secondary" href={url} target="_blank">
            Начать обучение
</Button>
            </div>
        );
    }
}

export default CourseItem;