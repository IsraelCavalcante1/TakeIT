package com.takeit.takeit.repository;

import com.takeit.takeit.model.TagModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TagRepository extends JpaRepository<TagModel, Long > {
    public Optional<TagModel> findByNome(String nome);
}
