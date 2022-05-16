package com.takeit.takeit.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity (name="T_TI_USER")
public class UsuarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long id;

    @Column(unique = true, name = "ds_email")
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name="ds_password")
    private String password;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_register", updatable = false)
    private Date registerDate;

    @Column(name = "dt_update", updatable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateDate;

    @PrePersist
    public void dataCadastro(){
        registerDate = Date.from(ZonedDateTime.now(ZoneId.of("America/Sao_Paulo")).toInstant());
        updateDate = registerDate;
    }

    @PreUpdate
    public void dataModificacao(){
        updateDate = Date.from(ZonedDateTime.now(ZoneId.of("America/Sao_Paulo")).toInstant());
    }


}
