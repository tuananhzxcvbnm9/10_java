package com.example.app05.api.controller;

import com.example.app05.api.request.CreateProductRequest;
import com.example.app05.application.dto.ProductDto;
import com.example.app05.application.mapper.ProductMapper;
import com.example.app05.application.service.ProductService;
import com.example.app05.domain.entity.Product;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/products", "/api/v1/products"})
public class ProductController {
  private final ProductService service;

  public ProductController(ProductService service) {
    this.service = service;
  }

  @GetMapping
  public List<ProductDto> list() {
    return service.list().stream().map(ProductMapper::toDto).toList();
  }

  @PostMapping
  public ProductDto create(@Valid @RequestBody CreateProductRequest req) {
    Product e = new Product();
    e.setName(req.name());
    e.setStatus(req.status());
    return ProductMapper.toDto(service.create(e));
  }
}
