package com.example.holidays.persistence.entity;


import jakarta.persistence.*;

import java.util.*;

@Entity
@Table(name = "HOLIDAY")

public class Holiday {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HOLIDAY_ID", nullable = false)
    private Long id;
    @Column(name = "NOM")
    private String firstName;
    @Column(name = "PRENOM")
    private String lastName;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "NUM_TEL")
    private Long tel;
    @Column(name = "DATE_DEB")
    private Date date_deb;
    @Column(name = "DATE_FIN")
    private Date date_fin;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getTel() {
        return tel;
    }

    public void setTel(Long tel) {
        this.tel = tel;
    }

    public Date getDate_deb() {
        return date_deb;
    }

    public void setDate_deb(Date date_deb) {
        this.date_deb = date_deb;
    }

    public Date getDate_fin() {
        return date_fin;
    }

    public void setDate_fin(Date date_fin) {
        this.date_fin = date_fin;
    }
}

