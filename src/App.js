import React from 'react';
import { coursesData } from "./coursesData";
import CourseItem from "./courseItem";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: coursesData,
    };
  }

  darkTheme = createMuiTheme({
    palette: {
      type: 'light',
      secondary: {
        light: '#FFCDD2',
        main: '#EF5350',
        dark: '#B71C1C',
        contrastText: '#fff',
      },
      primary: {
        light: '#f6a5c0',
        main: '#f48fb1',
        dark: '#aa647b',
        contrastText: '#000',
      },
    },
  });

  defaultState = () => {
    this.setState({
      courses: coursesData
    });
  }

  filterCoursesLang = course => {
    const updateFilterLang = coursesData.filter(item => item.language === course);
    this.setState({
      courses: updateFilterLang
    });
  };

  filterCoursesCost = course => {
    const updateFilterCost = coursesData.filter(item => item.cost === course);
    this.setState({
      courses: updateFilterCost
    });
  };

  filterCoursesTheme = course => {
    const updateFilterTheme = coursesData.filter(item => item.theme === course);
    this.setState({
      courses: updateFilterTheme
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.darkTheme}>
        <div className="main-menu">
          <p className="logo">Бесплатные курсы онлайн!</p>
        </div>
        <div className="wrapper"><div className="container">
          <Grid container >
            {this.state.courses.map(dataUpdate => {
              return (
                <Grid container item xs={4} >
                  <Card variant="outlined" className="course-card col-2 ">
                    <CourseItem
                      data={dataUpdate} key={dataUpdate.id}
                    />
                  </Card> </Grid>
              );
            })}
          </Grid></div>
          <Card variant="outlined" className="accordion arrows">
            <header className="box">
              <label htmlFor="acc-close" className="box-title filter-header">Фильтр</label>
            </header>
            <input type="radio" name="accordion" id="cb1" />
            <section className="box">
              <label className="box-title filter-title" htmlFor="cb1">Стоимость</label>
              <label className="box-close" htmlFor="acc-close"></label>
              <div className="box-content">
                <RadioGroup className="radio-group" name="cost" >
                  <FormControlLabel control={<Radio color="secondary" value="v1" onClick={() => {
                    this.defaultState();
                  }} />} label="Все" />
                  <FormControlLabel control={<Radio color="secondary" value="v2" onClick={() => {
                    this.filterCoursesCost("Бесплатно");
                  }} />} label="Бесплатно" />
                  <FormControlLabel control={<Radio color="secondary" value="v3" onClick={() => {
                    this.filterCoursesCost("Бесплатно*");
                  }} />} label="Бесплатно*" />
                </RadioGroup>
              </div>
            </section>
            <input type="radio" name="accordion" id="cb2" />
            <section className="box">
              <label className="box-title filter-title" htmlFor="cb2">Язык</label>
              <label className="box-close" htmlFor="acc-close"></label>
              <div className="box-content">
                <RadioGroup className="radio-group" name="language" >

                  <FormControlLabel control={<Radio color="secondary" value="v1" onClick={() => {
                    this.defaultState();
                  }} />} label="Все" />
                  <FormControlLabel control={<Radio color="secondary" value="v2" onClick={() => {
                    this.filterCoursesLang("Украинский");
                  }} />} label="Украинский" />
                  <FormControlLabel control={<Radio color="secondary" value="v3" onClick={() => {
                    this.filterCoursesLang("Русский");
                  }} />} label="Русский" />
                  <FormControlLabel control={<Radio color="secondary" value="v4" onClick={() => {
                    this.filterCoursesLang("Английский");
                  }} />} label="Английский" />
                </RadioGroup>
              </div>
            </section>
            <input type="radio" name="accordion" id="cb3" />
            <section className="box">
              <label className="box-title filter-title" htmlFor="cb3">Тематика</label>
              <label className="box-close" htmlFor="acc-close"></label>
              <div className="box-content">
                <RadioGroup className="radio-group" name="theme" >
                  <FormControlLabel control={<Radio color="secondary" value="v1" onClick={() => {
                    this.defaultState();
                  }} />} label="Все" />
                  <FormControlLabel control={<Radio color="secondary" value="v2" onClick={() => {
                    this.filterCoursesTheme("Разное");
                  }} />} label="Разное" />
                  <FormControlLabel control={<Radio color="secondary" value="v3" onClick={() => {
                    this.filterCoursesTheme("Интернет-маркетинг");
                  }} />} label="Интернет-маркетинг" />
                  <FormControlLabel control={<Radio color="secondary" value="v4" onClick={() => {
                    this.filterCoursesTheme("Проджект-менеджмент");
                  }} />} label="Проджект-менеджмент" />
                  <FormControlLabel control={<Radio color="secondary" value="v5" onClick={() => {
                    this.filterCoursesTheme("Программирование");
                  }} />} label="Программирование" />
                  <FormControlLabel control={<Radio color="secondary" value="v6" onClick={() => {
                    this.filterCoursesTheme("Бизнес-аналитика");
                  }} />} label="Бизнес-аналитика" />
                  <FormControlLabel control={<Radio color="secondary" value="v7" onClick={() => {
                    this.filterCoursesTheme("Базы данных");
                  }} />} label="Базы данных" />
                  <FormControlLabel control={<Radio color="secondary" value="v8" onClick={() => {
                    this.filterCoursesTheme("Дизайн");
                  }} />} label="Дизайн" />
                  <FormControlLabel control={<Radio color="secondary" value="v9" onClick={() => {
                    this.filterCoursesTheme("Фриланс");
                  }} />} label="Фриланс" />
                  <FormControlLabel control={<Radio color="secondary" value="v9" onClick={() => {
                    this.filterCoursesTheme("Финансы");
                  }} />} label="Финансы" />
                  <FormControlLabel control={<Radio color="secondary" value="v10" onClick={() => {
                    this.filterCoursesTheme("Кино");
                  }} />} label="Кино" />
                  <FormControlLabel control={<Radio color="secondary" value="v11" onClick={() => {
                    this.filterCoursesTheme("Фотография");
                  }} />} label="Фотография" />
                  <FormControlLabel control={<Radio color="secondary" value="v12" onClick={() => {
                    this.filterCoursesTheme("Цифровое образование");
                  }} />} label="Цифровое образование" />
                  <FormControlLabel control={<Radio color="secondary" value="v13" onClick={() => {
                    this.filterCoursesTheme("Аналитика");
                  }} />} label="Аналитика" />
                  <FormControlLabel control={<Radio color="secondary" value="v14" onClick={() => {
                    this.filterCoursesTheme("Data Science");
                  }} />} label="Data Science" />
                  <FormControlLabel control={<Radio color="secondary" value="v15" onClick={() => {
                    this.filterCoursesTheme("Искусство");
                  }} />} label="Искусство" />
                  <FormControlLabel control={<Radio color="secondary" value="v16" onClick={() => {
                    this.filterCoursesTheme("Здоровье");
                  }} />} label="Здоровье" />
                  <FormControlLabel control={<Radio color="secondary" value="v17" onClick={() => {
                    this.filterCoursesTheme("Бизнес");
                  }} />} label="Бизнес" />
                  <FormControlLabel control={<Radio color="secondary" value="v18" onClick={() => {
                    this.filterCoursesTheme("Консалтинг");
                  }} />} label="Консалтинг" />
                  <FormControlLabel control={<Radio color="secondary" value="v19" onClick={() => {
                    this.filterCoursesTheme("Machine learning");
                  }} />} label="Machine learning" />
                  <FormControlLabel control={<Radio color="secondary" value="v20" onClick={() => {
                    this.filterCoursesTheme("Языки");
                  }} />} label="Языки" />
                  <FormControlLabel control={<Radio color="secondary" value="v21" onClick={() => {
                    this.filterCoursesTheme("Школьные знания");
                  }} />} label="Школьные знания" />
                </RadioGroup>
              </div>
            </section>



          </Card>
        </div>
        <footer>
          <p>©Copyright 2020: by Diana <span role="img" aria-label="emoji">💁</span> with <span role="img" aria-label="emoji">💖</span></p>
        </footer>
      </ThemeProvider>
    );
  }
}

export default App;
