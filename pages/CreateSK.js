import React from 'react'
import styles from '../styles/Home.module.scss';

function CreateSK() {
    return( <div className = {styles.formContainer}>
                <form>
                    <div className = {styles.form1}>
                        <label for="username">Subkart Name:</label><br></br>
                        <input className={styles.input1}
                        id="sk name"
                        name="sk name"
                        type="text"
                        /><br></br>
                    </div>
                </form>
            </div>);
}

export default CreateSK;