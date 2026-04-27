package com.example.app01.api.controller;

import com.example.app01.api.request.CreateTaskRequest;
import com.example.app01.application.dto.TaskDto;
import com.example.app01.application.mapper.TaskMapper;
import com.example.app01.application.service.TaskService;
import com.example.app01.domain.entity.Task;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/tasks", "/api/v1/tasks"})
public class TaskController {
  private final TaskService service;

  public TaskController(TaskService service) {
    this.service = service;
  }

  @GetMapping
  public List<TaskDto> list() {
    return service.list().stream().map(TaskMapper::toDto).toList();
  }

  @PostMapping
  public TaskDto create(@Valid @RequestBody CreateTaskRequest req) {
    Task e = new Task();
    e.setName(req.name());
    e.setStatus(req.status());
    return TaskMapper.toDto(service.create(e));
  }
}
