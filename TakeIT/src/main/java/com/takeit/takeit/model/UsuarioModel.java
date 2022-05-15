package com.takeit.takeit.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity (name="t_ti_usuario")
public class UsuarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, name = "ds_login")
    private String login;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name="ds_password")
    private String password;
}
