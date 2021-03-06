package com.takeit.takeit.repository;

import com.takeit.takeit.model.TagModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<TagModel, Long > {
    public Optional<TagModel> findByNomeAndUserEmail(String nome, String email);
    List<TagModel> findAllByUserEmail(String email);
}
