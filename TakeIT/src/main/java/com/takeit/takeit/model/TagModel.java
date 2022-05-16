package com.takeit.takeit.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity (name="T_TI_TAG")
public class TagModel {
    @Id
    @Column(name = "tag_id")
    private long id;

    @Column(name="nm_nome", nullable = false)
    private String nome;

    @Column(name="ds_color", nullable = false)
    private String color;


//    private UsuarioModel user;

}
