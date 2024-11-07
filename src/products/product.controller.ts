import { Request, Response } from "express";
import { productService } from "./product.service";
import { quickSortByKey } from "../utils/quickSort";
import { ProductDto } from "./dto/product.dto";

export async function findAll(req: Request, res: Response) {
    const records = productService.findAll()
    return res.json(records)
}

export async function findOne(req: Request, res: Response) {
    const { id } = req.params
    const record = productService.findOne(+id)
    return res.json(record)
}

export async function create(req: Request, res: Response) {
    productService.create(req.body)
    return res.status(201).json({message: 'Product created successfully'})
}

export async function remove(req: Request, res: Response) {
    const { id } = req.params
    productService.delete(+id)
    return res.status(201).json({message: 'Product removed successfully'})
}

export async function update(req: Request, res: Response) {
    const { id } = req.params
    const record = await productService.update(+id, req.body)
    return res.status(201).json({message: 'Product updated successfully', data: record})
}

export async function sortBy(req: Request, res: Response) {
    const { sortKey, order } = req.params as { sortKey: keyof ProductDto, order: 'ASC' | 'DESC' }
    if (!sortKey) {
        return res.status(400).json({message: 'sortBy is required'})
    }
    console.log(sortKey);
    
    const records = productService.sort(sortKey, order)
    return res.status(200).json(records)
}

