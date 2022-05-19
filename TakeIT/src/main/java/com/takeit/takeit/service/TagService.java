package com.takeit.takeit.service;


import com.takeit.takeit.exception.DuplicatedObjectException;
import com.takeit.takeit.exception.NotFoundException;
import com.takeit.takeit.exception.UnauthorizedException;
import com.takeit.takeit.model.TagModel;
import com.takeit.takeit.model.UsuarioModel;
import com.takeit.takeit.repository.TagRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {
    private final TagRepository repository;
    private final UsuarioService userService;

    public TagService(TagRepository repository, UsuarioService userService) {
        this.repository = repository;
        this.userService = userService;
    }

    public TagModel salvar(TagModel tag){

        String username = userService.usuarioLogado();

        UsuarioModel user = userService.buscarPorEmail(username);
       TagModel userDuplicated = repository.findByNome(tag.getNome()).orElse(null);
       if  (userDuplicated != null){
           throw new DuplicatedObjectException("Tag", tag.getId());
       }
       tag.setUser(user);
       return repository.save(tag);
    }

 public List<TagModel> listarTodos(){
        return repository.findAll();
 }

 public List<TagModel> listarPorUsuario(){
        String email = userService.usuarioLogado();
        return repository.findAllByUserEmail(email);
 }

 public TagModel buscarPorId(long id){
   return repository.findById(id).orElseThrow(() -> new NotFoundException("Tag não encontrada",id));

 }

 public void excluir(long id){
        String username = userService.usuarioLogado();
        TagModel tag = buscarPorId(id);
        String userEmail = tag.getUser().getEmail();
        if (userEmail.equals(username)){
            repository.deleteById(id);
        } else if (!userEmail.equals(username)){
            throw new UnauthorizedException();
        }
 }


}
