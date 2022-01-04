'use strict';
const util = require('util');
const mysql = require('mysql');

const db = require('../../database/db');

module.exports = {
    get: (req, res) =>{
        let sql = 'SELECT * FROM employees'
        db.query(sql, (err, rows) =>{
            if(err) throw err
            res.json(rows)
        })
    },

    getEmployeesById: (req, res) =>{
        let employee_id = req.params.id
        let sql = 'SELECT * FROM employees WHERE id=?'
        db.query(sql, employee_id, (err, rows) =>{
            if(err) throw err
            res.json(rows)
        })
    },

    addNewEmployees: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO employees SET ?`
        db.query(sql, data, (err, rows) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })

        })
    },

    updateEmployees: (req, res) => {
        let data = req.body;
        if (!data.id) {
            return res.status(400).send({ error: true, message: 'Please provide id' });
        }
        let sql = `UPDATE employees SET ? WHERE id = ?`
        db.query(sql, [data, data.id], (err, rows) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    
    deleteEmployeesById: (req, res) => {
        let employee_id = req.params.id;
        let sql = 'DELETE FROM employees where id = ?'
        db.query(sql, employee_id, (err, rows) => {
            if (err) throw err
            res.json(rows);
        })
    }
}