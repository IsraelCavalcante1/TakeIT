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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="nm_nome_tag", nullable = false)
    private String nome;

    @Column(name="ds_color", nullable = false)
    private String color;

    @ManyToOne(cascade = { CascadeType.PERSIST})
    @JoinColumn(name = "user_id")
    private UsuarioModel user;

}
