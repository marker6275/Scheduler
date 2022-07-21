import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TermSelector from './TermSelector';
import Course from './Course';
import CourseSelector from './CourseSelector';

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
  
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    
    return (
        <ScrollView>
            <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
            <CourseSelector courses={termCourses} />
        </ScrollView>
    //   <View>
    //         <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
    //     <ScrollView>
    //       <View style={styles.courseList}>
    //         { termCourses.map(course => <Course key={course.id} course={course} />) }
    //       </View>
    //     </ScrollView>
    //   </View>
    );
  };

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring' };
const terms = Object.values(termMap);

const getCourseTerm = course => (
    termMap[course.id.charAt(0)]
);

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default CourseList;