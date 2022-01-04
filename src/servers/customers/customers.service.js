'use strict';
const util = require('util');
const mysql = require('mysql');

const db = require('../../database/db');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM customers'
        db.query(sql, (err, rows) => {
            if (err) throw err
            res.json(rows)
        })
    },

    getCustomersById: (req, res) => {
        let customer_id = req.params.id
        let sql = 'SELECT * FROM customers WHERE id=?'
        db.query(sql, customer_id, (err, rows) => {
            if (err) throw err
            res.json(rows[0])
        })
    },

    addNewCustomer: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO customers SET ?`
        db.query(sql, data, (err, rows) => {
            if (err) throw err
            res.json({status: 'success',message: 'Insert success!' })
        })
    },

    updateCustomer: (req, res) => {
        let data = req.body;
        if (!data.id) {
            return res.status(400).send({ error: true, message: 'Please provide id' });
        }
        let sql = `UPDATE customers SET ? WHERE id = ?`
        db.query(sql, [data, data.id], (err, rows) => {
            if (err){
              throw err
            }
            res.json({status: 'success',message: 'Update success!'})
        })
    },
    
    deleteCustomerById: (req, res) => {
        let customer_id = req.params.id;
        console.log('customer_id2: ', customer_id)
        let sql = 'DELETE FROM customers where id = ?'
        db.query(sql, customer_id, (err, rows) => {
            if (err) res.json({status: 'error', message: 'error'})
            else res.json({status: 'success', message: 'delete success'})
        })

    },
    login : (req, res) => {
        let data = req.body;
        console.log('data', data);
        let sql = 'SELECT * FROM customers WHERE username = ? AND password = ?'
        db.query(sql, [data.username, data.password], (err, rows) => {
            if (err) res.json({status: 'error_in_query', message: 'error in login'})
            else
              {
                if(rows.length > 0)
                {
                    res.json({status: 'success', data: rows[0]})
                }
                else
                {
                    res.json({status: 'error', message: 'login failed'})
                }
              }
        })
    }

}