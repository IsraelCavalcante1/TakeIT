package com.takeit.takeit.service;

import com.takeit.takeit.exception.DuplicatedObjectException;
import com.takeit.takeit.exception.NotFoundException;
import com.takeit.takeit.model.BoardModel;
import com.takeit.takeit.model.TagModel;
import com.takeit.takeit.model.UsuarioModel;
import com.takeit.takeit.repository.BoardRepository;
import com.takeit.takeit.repository.TagRepository;
import com.takeit.takeit.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {
    private final TagRepository tagRepository;
    private final UsuarioRepository userRepository;
    private final BoardRepository boardRepository;
    private final UsuarioService userService;


    public BoardService(TagRepository tagRepository, UsuarioRepository userRepository, BoardRepository boardRepository, UsuarioService userService) {
        this.tagRepository = tagRepository;
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
        this.userService = userService;
    }

    public BoardModel salvar(BoardModel board){
        String username = userService.usuarioLogado();
        UsuarioModel user = userService.buscarPorEmail(username);
        BoardModel boardDuplicated = boardRepository.findByNome(board.getNome()).orElse(null);
        if (boardDuplicated != null){
            throw new DuplicatedObjectException("Board", board.getId());
        }
        board.setUser(user);
        List<TagModel> listaTag = board.getTags();
        List<TagModel> tagSalva = new ArrayList<>();
        for (TagModel tag : listaTag){
            TagModel tagSearch = tagRepository.findById(tag.getId()).orElseThrow(() -> new NotFoundException("tag", tag.getId()));
            tagSalva.add(tagSearch);
        }
        board.setTags(tagSalva);
        return boardRepository.save(board);
    }

    public List<BoardModel> listarPorUsuario(){
        String email = userService.usuarioLogado();
        return boardRepository.findAllByUserEmail(email);
    }

}
