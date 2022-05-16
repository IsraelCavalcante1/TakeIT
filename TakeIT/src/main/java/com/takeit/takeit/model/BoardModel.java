package com.takeit.takeit.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity (name="T_TI_BOARD")

public class BoardModel {
    @Id
    @Column (name="ds_board_id")
    private long id;

    @Column(name="ds_board_name")
    private String nome;


    @ManyToOne(cascade = { CascadeType.PERSIST })
    private UsuarioModel user;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "T_TI_TAG_BOARD",
            joinColumns = { @JoinColumn(name = "ds_board_id") },
            inverseJoinColumns = { @JoinColumn(name = "tag_id") }
    )
    private List<TagModel> tags;
}
