import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { firebase } from '../firebase'

const Field = ({label, value}) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const CourseEditScreen = ({navigation, route}) => {
    const course= route.params.course;
    const [submitError, setSubmitError] = useState('');

    async function handleSubmit(values) {
        const { id, meets, title} = values;
        const course = { id, meets, title };
        firebase.database().ref('courses').child(id).set(course).catch(error => {
            setSubmitError(error.message);
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Form
                initialVlaues= {{
                    id: course.id,
                    meets: course.meets,
                    title: course.title,
                }}
                validationSchema={validationSchema}
                onSubmit={values => handleSubmit(values)}
                >
                <Field label="ID" value={course.id} />
                <Field label="Meeting times" value={course.meets} />
                <Field label="Title" value={course.title} />
                <Form.Button title={'Update'} />
                {<Form.ErrorMessage error={submitError} visible={true} />}
                </Form>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccccb3'
    },
    field: {
        height: 40,
        width: 300,
        padding: 5,
        backgroundColor: 'white'
    },
    fieldContainer: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.26,
        elevation: 4,
    },
    label: {
        fontWeight: 'bold',
    }
});

export default CourseEditScreen;