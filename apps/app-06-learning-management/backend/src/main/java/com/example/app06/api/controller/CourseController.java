package com.example.app06.api.controller;

import com.example.app06.api.request.CreateCourseRequest;
import com.example.app06.application.dto.CourseDto;
import com.example.app06.application.mapper.CourseMapper;
import com.example.app06.application.service.CourseService;
import com.example.app06.domain.entity.Course;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/courses", "/api/v1/courses"})
public class CourseController {
  private final CourseService service;

  public CourseController(CourseService service) {
    this.service = service;
  }

  @GetMapping
  public List<CourseDto> list() {
    return service.list().stream().map(CourseMapper::toDto).toList();
  }

  @PostMapping
  public CourseDto create(@Valid @RequestBody CreateCourseRequest req) {
    Course e = new Course();
    e.setName(req.name());
    e.setStatus(req.status());
    return CourseMapper.toDto(service.create(e));
  }
}
