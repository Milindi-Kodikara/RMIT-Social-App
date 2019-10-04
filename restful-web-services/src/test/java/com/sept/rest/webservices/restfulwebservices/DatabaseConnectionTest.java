package com.sept.rest.webservices.restfulwebservices;

import org.junit.*;
import static org.junit.Assert.*;
import java.sql.*;

public class DatabaseConnectionTest {

    Connection connection;

    // Number of tables inside the database
    int numOfTables = 4;


    @Before
    public void setUp() throws ClassNotFoundException, SQLException {
        String url = "jdbc:mysql://localhost:3306/septfansdb";
        String username = "root";
        String password = "";

        this.connection = DriverManager.getConnection(url, username, password);

    }

    // Before running the test,
    // an open connection to the database
    // in the Google Cloud via proxy is needed
    
    @Test
    public void checkConnection() throws SQLException {
        Statement statement = connection.createStatement();
        statement.executeQuery("use septfansdb");
        ResultSet result = statement.executeQuery("show tables;");
        int counter = 0;
        while(result.next()){
            counter += 1;
        }
        assertTrue(counter == numOfTables);
    }

    @After
    public void endConnection() throws SQLException {
        this.connection.close();
    }
}