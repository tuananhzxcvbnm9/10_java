package com.example.app02.api.controller;

import com.example.app02.api.request.CreateInventoryItemRequest;
import com.example.app02.application.dto.InventoryItemDto;
import com.example.app02.application.mapper.InventoryItemMapper;
import com.example.app02.application.service.InventoryItemService;
import com.example.app02.domain.entity.InventoryItem;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/inventory_items", "/api/v1/inventory_items"})
public class InventoryItemController {
  private final InventoryItemService service;

  public InventoryItemController(InventoryItemService service) {
    this.service = service;
  }

  @GetMapping
  public List<InventoryItemDto> list() {
    return service.list().stream().map(InventoryItemMapper::toDto).toList();
  }

  @PostMapping
  public InventoryItemDto create(@Valid @RequestBody CreateInventoryItemRequest req) {
    InventoryItem e = new InventoryItem();
    e.setName(req.name());
    e.setStatus(req.status());
    return InventoryItemMapper.toDto(service.create(e));
  }
}
