package com.takeit.takeit.repository;

import com.takeit.takeit.model.BoardModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BoardRepository extends JpaRepository<BoardModel, Long> {
    List<BoardModel> findAllByUserEmail(String email);
    Optional<BoardModel> findByNome(String nome);

}
