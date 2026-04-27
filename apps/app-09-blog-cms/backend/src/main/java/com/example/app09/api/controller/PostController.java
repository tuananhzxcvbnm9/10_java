package com.example.app09.api.controller;

import com.example.app09.api.request.CreatePostRequest;
import com.example.app09.application.dto.PostDto;
import com.example.app09.application.mapper.PostMapper;
import com.example.app09.application.service.PostService;
import com.example.app09.domain.entity.Post;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/posts", "/api/v1/posts"})
public class PostController {
  private final PostService service;

  public PostController(PostService service) {
    this.service = service;
  }

  @GetMapping
  public List<PostDto> list() {
    return service.list().stream().map(PostMapper::toDto).toList();
  }

  @PostMapping
  public PostDto create(@Valid @RequestBody CreatePostRequest req) {
    Post e = new Post();
    e.setName(req.name());
    e.setStatus(req.status());
    return PostMapper.toDto(service.create(e));
  }
}
