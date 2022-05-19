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
    @Column (name="board_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="nome")
    private String nome;

    @Column (name = "link")
    private String link;

    @Column (name = "description")
    private String description;

    @ManyToOne(cascade = { CascadeType.PERSIST })
    @JoinColumn(name = "user_id")
    private UsuarioModel user;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "T_TI_TAG_BOARD",
            joinColumns = { @JoinColumn(name = "board_id") },
            inverseJoinColumns = { @JoinColumn(name = "tag_id") }
    )
    private List<TagModel> tags;
}

