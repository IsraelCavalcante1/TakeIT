package com.takeit.takeit.controller;

import com.takeit.takeit.model.TagModel;
import com.takeit.takeit.service.TagService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/takeit/tag")
public class TagController {

    private final TagService service;

    public TagController(TagService service) {
        this.service = service;
    }

    @GetMapping("/listarTag")
    public ResponseEntity<List<TagModel>> listarTag(){
        return ResponseEntity.ok(service.listarPorUsuario());
    }

    @PostMapping("/criar")
    public ResponseEntity<TagModel> salvar(@RequestBody TagModel tag){
        return ResponseEntity.ok(service.salvar(tag));
    }

    @DeleteMapping("/excluir")
    public void excluir(@RequestParam long id){
        service.excluir(id);
    }
}
