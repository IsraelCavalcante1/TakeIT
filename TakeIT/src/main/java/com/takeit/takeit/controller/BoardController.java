package com.takeit.takeit.controller;


import com.takeit.takeit.model.BoardModel;
import com.takeit.takeit.service.BoardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/takeit/board")
public class BoardController {
    private final BoardService service;

    public BoardController(BoardService service) {
        this.service = service;
    }


    @PostMapping("/criar")
    public ResponseEntity<BoardModel> salvar(@RequestBody BoardModel board){
        return ResponseEntity.ok(service.salvar(board));
    }
}
